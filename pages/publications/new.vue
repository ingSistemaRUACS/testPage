<template>
  <section id="nueva-publicacion">
    <h1>Nueva Publicación</h1>
    <p>Despues de el panel de creacion de Publicacion se encuentra la vista previa de esta.</p>
    <form enctype='multipart/form-data' id="pub-input" action="http://httpbin.org/anything" method="post" >
     <h2 class="SubTitle">Crear Publicación</h2>
      <div>
        <label for="postTitle">Titulo:</label>
        <input v-model="postTitle" type="text" name="postTitle" id="postTitleInput">
      </div>
      <div>
        <label for="postDesc">Descripcion Corta:</label>
        <input v-model="postDesc" type="text" name="postDesc" id="postDescInput">
      </div>
      <div>
        <label for="isEventCh">Es un evento?</label>
        <input v-model="isEvent" type="checkbox" name="isEventCh" id="isEventInput">
      </div>

      <div v-if="isEvent">
        <label for="eventDetails">Fecha del evento</label>
        <input v-model="eventDate" type="date" name="eventDetails">
      </div>
      <div>
        <label for="contentInput">Contenido</label>
      <textarea
      name="contentInput"
      id="content-input"
      spellcheck="false"
      v-model="liveCode"></textarea>
      </div>
      <div>
         <label for="contentInput">Miniatura</label>
      <img-inputer
        id="thumbnail-inp"
        accept="image/*"
        placeholder=""
        bottomText=""
        @onChange="thumbnailAdded"
        />
      <!-- <input type="hidden" name="user" :value="loggedInEmail"> -->
    <card :title="postTitle" :description="postDesc" :esEvento="isEvent" :date="eventDate" :imgUrl="thumbURL" id="prev-card"/>
     </div>
    <div>
      <p>Imagenes</p>
      <div id="images-container">
        <img-inp
          v-for="el in images.concat([{}])"
          :key="el.name"
          @destroy="destr"
          @imageAdded="imgAdded"></img-inp>
      </div>
       </div>
      <input id="btn-public" type="submit" @click="sendDataToServer" value="Guardar">
    </form>
    <div id="ViewPrev">
        <h2  class="SubTitle">Vista Previa</h2>
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
    </div>
  </section>
</template>

<script>
import VueShowdown from 'vue-showdown'
import Card from '@/components/timeline/Card'
import ImgInputer from 'vue-img-inputer'

// import ImgInputer from 'vue-img-inputer'
import ImgInp from '@/components/publications/ImgInp'
import { functions, storage } from '@/plugins/firebase'
import { uuid } from '@/utils/uuid'

let imgURICallback = ()=>undefined
export default {
  layout: 'publicationLayouts',
  middleware: 'verifyAuthenticatedAdmin',
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
      postDesc: '',
      isEvent: false,
      eventDate: undefined,
      thumbnailImg: ''
    }
  },
  computed: {
    thumbURL () {
      return this.thumbnailImg ? URL.createObjectURL(this.thumbnailImg) : ''
    }
  },
  methods: {
    imgAdded (info, comp) {
      this.images.push({img: info, el: comp})

      this.getImgURL(this.findImage(info.name))
    },
    thumbnailAdded (data){
      this.thumbnailImg = data
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

      let thumbnailPath = ''
      if (this.thumbnailImg){
        thumbnailPath = (await postStorage
          .child(this.thumbnailImg.name)
          .put(this.thumbnailImg)
        ).metadata.fullPath
      }

      data.thumbnail = thumbnailPath

      data.imagenes = imgPaths.map(x=>({ name: x.metadata.name, path: x.metadata.fullPath }))

      data.fechaPublicacion = (new Date(Date.now())).toDateString()

      data.esEvento = false
      if (this.isEvent){
        data.esEvento = true
        data.fechaEvento = this.eventDate || (new Date(Date.now())).toDateString()
      }

      console.log(data)
      console.log("Posting the publication to the server")

      const addPublication = functions.httpsCallable('addPublication')
      addPublication(data).then(result => {
        console.log("Posted Successfuly")
        this.$router.push('/account')
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
  min-width: calc(100% - 20px);
  max-width:calc(100% - 20px);
  margin-left: 10px;
  border: none;
  background-color: #d6d6d655;
  height: 30vh;
}
.SubTitle {
  text-align: center;
  color: #474747;
}
#pub-input{
  margin-bottom: 20px;
  padding: 30px 0;
  background-color: white;
  padding: 20px 0;
  box-shadow: 0px 7px 28px 18px rgba(199, 199, 199, 0.171);

}

#pub-input > div {
  width: calc(100% - 40px);
  margin:  0 20px;
  padding: 2px 0;
  display: grid;
  grid-template-columns: auto 1fr;
  border-bottom: solid #959595 1px;
}

#pub-input > div > input {
  border: none;
}

#nueva-publicacion {
  padding: 0 50px;
}

#thumbnail-inp .img-inputer__file-name{
  display: none;
}
#btn-public {
  background:  #5700e2;
  font-size: 1.1em;
  border-radius: 5px;
  color: white;
  width: 150px;
  height: 50px;
  padding: 15px 20px;
  border: none;
  margin: 20px;
  margin-left: 50px;
}
#ViewPrev {
  padding-top: 30px;
  background-color: white;
  box-shadow: 0px 7px 28px 18px rgba(199, 199, 199, 0.171);
}
@media(max-width: 700px) {
 #pub-input > div {
  grid-template-columns: 100%;
  grid-template-rows: auto 1fr;
}

}
</style>