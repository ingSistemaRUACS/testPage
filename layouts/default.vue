<template>
  <div>
    <Header />
    <nuxt />
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
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  box-sizing: border-box;
}
body
{
  background-color: #EEEEEE;
}
</style>
