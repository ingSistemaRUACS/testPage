<template>
  <main>
    <h1 id="pub-title">
      {{ publicacion.titulo }}
    </h1>
    <section id="pub-info">
      <span class="pub-detail" id="pub-author">Por: {{ publicacion.autor }}</span> |
      <span class="pub-detail" id="pub-date">{{ publicacion.fecha }}</span>
    </section>
    <div id="pub-content" v-html="textDom.contenido"></div>
  </main>
</template>

<script>
import Publicacion from '@/data/publicacion/publicacion'
import showdown from 'showdown'

const conv = new showdown.Converter({
  headerLevelStart: 2,
  simplifiedAutoLink: true,
  extensions: [
    {
      type: 'lang',
      regex: /\^\^youtube (\S+)/g,
      replace: '<iframe width="560" height="315" src="https://www.youtube.com/embed/$1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
    }
  ]
})

export default {
  layout: 'publication',
  data () {
    return {
      publicacion: new Publicacion(
        'Sin Titulo',
        'Nadie',
        'El contenido de la publicacion',
        '12-12-1967'
      ),
      textDom: {
        contenido: 'El contenido de la publicacion'
      }
    }
  },
  asyncData ({ $axios }) {
    const url = 'http://localhost:8000/'
    const result = {
      contenido: 'Vacio'
    }

    $axios.$get(url + 'publicacion1.md')
      .then((res) => {
        result.contenido = conv.makeHtml(res)
      })
    return {
      textDom: result // result || 'Sin Contenido'
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

h2{
  margin-top: 40px;
}

#pub-content{
  color:#3f3f3f;
  min-height: 500px;
}

#pub-content img{
  margin: 30px auto;
  display: block;
  max-width: 95%;
  max-height: 60vh;
}

#pub-content iframe{
  margin: 30px auto;
  display: block;
  max-width: 95%;
  max-height: 60vh;
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
