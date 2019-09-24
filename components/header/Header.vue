<template>
  <header>
    <Bar />
  </header>
</template>

<script>
import Bar from './Bar'
export default {
  components: {
    Bar
  }
}
</script>

<style scoped>
/* Header CSS */
header{
  position: relative;
  overflow: hidden;
  width: 100%;
  min-height: 60px;
}

@media(min-width: 800px) {
  header h1{
    font-size: 0.2em;
  }
}
</style>
