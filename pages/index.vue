<template>
  <div class="container">
    <Header />
  </div>
</template>
<script>
import Header from '@/components/header/Header'

export default {
  components: {
    Header
  }
}
</script>

<style>
body{
  /* Para descansar mis ojos un rato */
  background: #222;
  color: #fff;
}

.container{
  max-width: 500px;
  background: #fff;
  min-height: 100vh;
  margin: 0 auto;
}
</style>
