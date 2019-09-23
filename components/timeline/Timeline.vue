<template>
  <section id="timeline">
    <Card class="tm-card" />
    <Card class="tm-card" />
    <Card class="tm-card" />
    <Card class="tm-card" />
    <Card class="tm-card" />
    <Card class="tm-card" />
    <Card class="tm-card" />
    <Card class="tm-card" />
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
.tm-card{
  margin-bottom: 20px;
}
</style>
