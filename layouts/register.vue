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
  background-color: #ffffff;
  margin: 0 auto;
  margin-top: 60px;
  padding: 20px 0;
  position: relative;
  max-width: 350px;
  border-radius: 5px;
  box-shadow: 0px 7px 28px 18px rgba(199, 199, 199, 0.171);
}

#pag {
  width: 100%;
  display: grid;
  grid-template-columns: 30px 1fr;
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
  background-color: #f9f9f9;
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
    max-width: 100%;
    height: 100vh;
    margin: 0;
    padding-top: 20px;
    margin-left: 40px;
  }
}
</style>
