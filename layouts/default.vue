<template>
  <div id="container">
    <header>
      <Bar />
      <Menu />
    </header>
    <nuxt />
  </div>
</template>

<script>
import Bar from '@/components/header/Bar'
import Menu from '@/components/menu/Menu'

export default {
  components: {
    Bar,
    Menu
  }
}
</script>
<style>
#container{
  background: #fff;
  margin: 0 auto;
  position: relative;
  max-width: 700px;
}

header{
  min-height: 100px;
}

html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  box-sizing: border-box;
  margin: 0;
}

body {
  margin: 0;
  background-color: #EEEEEE;
}

a{
  color: unset;
  text-decoration: none;
}

a:visited{
  color: unset;
}
</style>
