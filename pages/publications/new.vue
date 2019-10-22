<template>
  <section id="nueva-publicacion">
    <h1>Nueva Publicación</h1>
    <form enctype='multipart/form-data' id="pub-input" action="http://httpbin.org/anything" method="post" >
      <div>
        <label for="postTitle">Titulo:</label>
        <input v-model="postTitle" type="text" name="postTitle" id="postTitleInput">
      </div>
      <div>
        <label for="postDesc">Descripcion Corta:</label>
        <input v-model="postDesc" type="text" name="postDesc" id="postDescInput">
      </div>
      <label for="contentInput">Contenido</label>
      <textarea
      name="contentInput"
      id="content-input"
      spellcheck="false"
      v-model="liveCode"></textarea>
      <!-- <input type="hidden" name="user" :value="loggedInEmail"> -->
      <p>Imagenes</p>
      <div id="images-container">
        <img-inp
          v-for="el in images.concat([{}])"
          :key="el.name"
          @destroy="destr"
          @imageAdded="imgAdded"></img-inp>
      </div>
      <input type="submit" @click="sendDataToServer" value="Guardar">
    </form>
    <h2>Vista Previa:</h2>
    <h1>{{ postTitle }}</h1>
    <vue-showdown
      :id="'pub-content'"
      :markdown="liveCode"
      :options="{
        headerLevelStart: 2,
        simplifiedAutoLink: true
      }"
      :tag="'article'"
      :extensions="[youtubeExtension, imageExtension]"/>
      <hr>
    <card :title="postTitle" :description="postDesc" id="prev-card"/>
  </section>
</template>

<script>
import VueShowdown from 'vue-showdown'
import Card from '@/components/timeline/Card'

// import ImgInputer from 'vue-img-inputer'
import ImgInp from '@/components/publications/ImgInp'
import { functions, storage } from '@/plugins/firebase'
import { uuid } from '@/utils/uuid'

let imgURICallback = ()=>undefined
export default {
  layout: 'publication',
  middleware: 'verifyAuthenticated',
  components: {
    'vue-showdown': VueShowdown.VueShowdown,
    'img-inp': ImgInp,
    'card': Card
  },
  created () {
    imgURICallback = this.getImgURL

    document.querySelector('body').addEventListener('beforeunload', (ev) => {
      const response = confirm('¿Seguro de que quiere salir de la pagina? Todo el progreso se perderá.')

      if (!response){
        ev.preventDefault()
      }
    })
  },
  data () {
    return {
      liveCode: '',
      youtubeExtension: {
        type: 'lang',
        regex: /\^\^youtube (\S+)/g,
        replace: '<iframe width="560" height="315"'+
        ' src="https://www.youtube.com/embed/$1" frameborder="0"' +
        ' allow="accelerometer; autoplay; encrypted-media;' +
        'gyroscope; picture-in-picture" allowfullscreen></iframe>'
      },
      imageExtension: {
        type: 'lang',
        regex: /\^\^imagen (\S+)/g,
        replace (txt, gro) {
          const res = imgURICallback(gro)
          if (!res){
            gro = 'Imagen no encontrada'
          }
          return `<img src="${res}" alt="${gro}"></img>`
        }
      },
      images: [
        // {name: '', selected: false}
      ],
      postTitle: '',
      postDesc: ''
    }
  },
  computed: {
    
  },
  methods: {
    imgAdded (info, comp) {
      this.images.push({img: info, el: comp})

      this.getImgURL(this.findImage(info.name))
    },
    destr (el) {
      // this.images = this.images.sort
      this.images = this.images.filter(x => x.el !== el)
      el.reset()
      // el.$el.parentNode.removeChild(el.$el)
      // el.$destroy()
    },
    findImage (name) {
      const theObject = this.images.find(
        obj => obj.img.name == name
      )

      return theObject && theObject.img
    },
    getImgURL (img) {
      if (typeof img == 'string'){
        img = this.findImage(img)
        if (!img) return null
      }

      return URL.createObjectURL(img)
    },

    async sendDataToServer (ev) {
      ev.preventDefault()
      const currentUser = this.$store.state.user
      const stRef = storage.ref().child('postFiles/' + currentUser.id)
      const postId = uuid()
      const postStorage = stRef.child(postId)

      const data = {
        titulo: this.postTitle,
        descripcion: this.postDesc,
        id: postId,
        codigo: this.liveCode
      }

      const imgPaths = await Promise.all(this.images.map(async obj => {
        if (obj.img){
          const imgRef = postStorage.child(obj.img.name)
          return await imgRef.put(obj.img)
        }
      }))

      data.imagenes = imgPaths.map(x=>({ name: x.metadata.name, path: x.metadata.fullPath }))

      console.log("Posting the publication to the server")

      const addPublication = functions.httpsCallable('addPublication')
      addPublication(data).then(result => {
        console.log("Posted Successfuly")
        window.location.href = this.$store.getters.getPagAccount()
      }).catch(error => {
        console.error("ERROR ON REQUEST")
        console.error(error)
      })
    }
  }
}
</script>

<style>
#prev-card{
  transform: scale(0.8);
  max-width: 300px;
  margin: 0;
}

#prev-card *{
  pointer-events: none;
}

#images-container{
  display: flex;
  overflow: hidden;
  flex-wrap: wrap;
}

#content-input{
  min-width: 100%;
  max-width: 100%;
  height: 30vh;
}

#pub-input{
  padding: 30px 0;
  border-bottom: 2px solid gray;
}

#nueva-publicacion {
  padding: 0 50px;
}
</style>