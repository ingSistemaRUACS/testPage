<template>
  <section id="timeline">
    <Card
      v-for="post in publicaciones"
      v-bind:key="post.id"
      :title="post.titulo"
      :description="post.descripcion"
      :postId="post.id"
      :esEvento="post.esEvento"
      :date="post.fechaEvento"
      :imgUrl="thumbnails[post.id].url"
      class="tm-card" />
  </section>
</template>

<script>
import Card from './Card'
import { storage } from '@/plugins/firebase'

export default {
  created(){
    this.publicaciones.forEach(pst => {
      if (!pst.thumbnail) return

      const imgRef = storage.ref(pst.thumbnail)
      imgRef.getDownloadURL().then(result => {
        this.thumbnails[pst.id].url = result
      })
    })
  },
  methods: {},
  data() {
    const thmbs = {}
    this.publicaciones.forEach(pst => {
      thmbs[pst.id] = {
        url: ''
      }
    })
    return {
      thumbnails: thmbs
    }
  },
  props: [
    'publicaciones'
  ],
  components: {
    Card
  }
}
</script>

<style scoped>
.tm-card{
  margin-bottom: 20px;
}
</style>
