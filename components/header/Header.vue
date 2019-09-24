<template>
  <header>
    <Bar />
    <Presentation />
  </header>
</template>

<script>
import Bar from './Bar'
import Presentation from './Presentation'
export default {
  components: {
    Bar,
    Presentation
  }
}
</script>

<style scoped>
/* Header CSS */
header{
  position: relative;
  overflow: hidden;
  width: 100%;
}

@media(min-width: 800px) {
  header h1{
    font-size: 0.2em;
  }
}
</style>
