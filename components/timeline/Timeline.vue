<template>
  <section id="timeline">
    <Card
      v-for="post in publicaciones"
      v-bind:key="post.id"
      :title="post.titulo"
      :description="post.descripcion"
      :postId="post.id"
      class="tm-card" />
  </section>
</template>

<script>
import Card from './Card'
export default {
  data() {
    return {

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
