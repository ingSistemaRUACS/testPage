<template>
  <section id="timeline">
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
  </section>
</template>

<script>
import Card from './Card'
export default {
  components: {
    Card
  }
}
</script>

<style scoped>
#timeline>*{
  margin-bottom: 20px;
}
</style>
