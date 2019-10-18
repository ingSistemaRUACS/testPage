<template>
  <div id="container-register">
    <header>
      <Menu />
    </header>
    <nuxt />
  </div>
</template>

<script>
import Menu from '@/components/menu/Menu'

export default {
  components: {
    Menu
  }
}
</script>
<style scoped>
#container-register{
 background: #474747;
  margin: 5vh auto;
  padding: 0;
  position: relative;
  max-width: 800px;
  height: 80vh;
  box-shadow: 0px 0px 5px 2px rgb(147, 147, 147);
}

header{
  min-height: 0px;
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
  background-color: rgb(235, 235, 235);
}

a{
  color: unset;
  text-decoration: none;
}

a:visited{
  color: unset;
}

@media screen and (max-width: 480px) {
  #container-register {
    position:absolute;
    max-width: 100%;
    min-height: 100vh;
    height: auto;
    margin: 0;
    top: 0;
  }
}
</style>
