<template>
  <div class="container">
    <Timeline id="tm" />
  </div>
</template>
<script>
import Timeline from '@/components/timeline/Timeline'

export default {
  components: {
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
