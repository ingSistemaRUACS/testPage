<template>
  <div class="container">
    <Header />
    <Timeline id="tm" />
  </div>
</template>
<script>
import Header from '@/components/header/Header'
import Timeline from '@/components/timeline/Timeline'

export default {
  components: {
    Header,
    Timeline
  }
}
</script>

<style>
.container{
  max-width: 500px;
  background: #fff;
  min-height: 100vh;
  margin: 0 auto;
}

#tm{
  width: 50%;
}
</style>
