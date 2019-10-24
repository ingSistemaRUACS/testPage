<template>
  <main>
    <div v-if="inexistente" style="text-align=center">
      <h1>La publicacion cargada no existe! :(</h1>
      <h1>ID de la publicacion: '{{ idPub }}'</h1>
    </div>
    <span v-else>
      <h1 id="pub-title">
        {{ publicacion.titulo }}
      </h1>
      <section id="pub-info">
        <span class="pub-detail" id="pub-date">{{ publicacion.fecha }}</span>
      </section>
      <div id="pub-content" v-html="htmlContent"></div>

      <hr>

      <div v-if="publicacion.esEvento">
        Este evento ocurri{{ (Date.now() < (new Date(publicacion.fechaEvento)).getTime()) ? 'rá' : 'ó' }} en:
        {{ (new Date(publicacion.fechaEvento)).toLocaleDateString() }}

        <div class="asistentes-ev">
          Quienes asistiran:
          <div class="asistente" v-for="ass in asistentes" v-bind:key="ass.id">
            <strong>Carnet:</strong> {{ ass.carnet }} |
            <strong>Seccion:</strong> {{ ass.seccion }}
          </div>

          <button @click="sayYoullGo">Asistiré!</button>
        </div>
      </div>
    </span>
  </main>
</template>

<script>
import Publicacion from '@/data/publicacion/publicacion'
import showdown from 'showdown'
import { storage, firestore, functions, db } from '@/plugins/firebase'
import { mapGetters } from 'vuex'

let findImgURL = (imgURL) => '#'

const conv = new showdown.Converter({
  headerLevelStart: 2,
  simplifiedAutoLink: true,
  extensions: [
    {
      type: 'lang',
      regex: /\^\^youtube (\S+)/g,
      replace: '<iframe width="560" height="315"'+
      ' src="https://www.youtube.com/embed/$1" frameborder="0"' +
      ' allow="accelerometer; autoplay; encrypted-media;' +
      'gyroscope; picture-in-picture" allowfullscreen></iframe>'
    },
    {
      type: 'lang',
      regex: /\^\^imagen (\S+)/g,
      replace (txt, gro) {
        const res = findImgURL(gro)
        if (!res){
          gro = 'Imagen no encontrada'
        }

        return `<img src="${res}" alt="${gro}"></img>`
      }
    }
  ]
})

export default {
  // layout: '',
  created () {
    findImgURL = this.findImg
  },
  data () {
    return {
      publicacion: new Publicacion(
        'Sin Titulo',
        'Nadie',
        'El contenido de la publicacion',
        '12-12-1967',
        false
      ),
      inexistente: false,
      userVerified: this.isStudentVerified,
      asistentes: []
    }
  },
  async asyncData ({ route }) {
    const postId = route.params.id
    const postRef = firestore.collection('posts').doc(postId)

    const postContent = (await postRef.get()).data()

    if (postContent){
      let urls = []
      if (postContent.imagenes.length > 0){
        urls = await Promise.all(postContent.imagenes.map(x => {
          const strRef = storage.ref(x.path)
          return strRef && strRef.getDownloadURL()
        }))
      }
  
      for(let i = 0; i < urls.length; i++){
        const imgName = postContent.imagenes[i].name
        const url = urls[i]
  
        postContent.imagenes[i].url = urls[i]
      }
  
      const newPub = new Publicacion(
        postContent.titulo,
        postContent.autor,
        postContent.codigo,
        new Date(postContent.publicadoEn).toLocaleDateString(),
        postContent.imagenes,
        postContent.esEvento,
        postContent.fechaEvento
      )

      let listaCarnets = []

      if (newPub.esEvento){
        const estudiantes = db.ref('events/' + postId)
        const listaUsuarios =(await estudiantes.once('value')).val()
        const listaIds = (listaUsuarios && listaUsuarios.users) || []
        listaCarnets = (await Promise.all(
          listaIds.map(
            async usr => {
              return db.ref('users/' + usr).once('value')
            }
          )
        )).map(result => ({id: result.key, carnet: result.val()['carnet'], seccion: result.val()['section']}))
      }

      return {
        idPub: postId,
        publicacion: newPub,
        asistentes: listaCarnets
      }
    } else {
      return {
        idPub: postId,
        inexistente: true,
        asistentes: []
      }
    }
  },
  computed: {
    htmlContent() {
      return conv.makeHtml(this.publicacion.contenido)
    },
    ...mapGetters['isStudentVerified']
  },
  methods: {
    findImg(imgName) {
      const foundImg = this.publicacion.imagenes.find(x=>x.name==imgName)
      return foundImg && foundImg.url
    },
    sayYoullGo(){
      const addUserToEvent = functions.httpsCallable('addUserToEvent')
      addUserToEvent({ eventId: this.idPub }).then(x => {
        this.$router.$forceUpdate()
      })
    }
  }
}
</script>

<style>
#pub-info{
  text-align: right;
  margin-bottom: 30px;
}

.pub-detail{
  font-size: 0.8em;
  color: rgb(135, 135, 135);
}

main{
  padding: 0 70px;
}

#pub-content{
  max-width: 900px;
  margin: 0 auto;
}

.asistentes-ev{
  margin: 20px;
  padding: 5px;
  width: 20em;
  border-radius: 2px;
  box-shadow: 0 0 5px 0 gray;
}

.asistente{
  margin: 20px 0;
  border-top: 1px solid gray;
  border-bottom: 1px solid gray;
}

@media(max-width: 700px) {
  main{
    padding: 0 20px;
  }

  p.quote{
    margin: 15px 0;
  }
}
</style>
