<template>
 <div id="container">
    <header>
      <Menu />
      <Bar />
    </header>
    <div id="pag-News"> 
      <nuxt />
       <Footer />
    </div>  
  </div>
</template>

<script>

import Menu from "@/components/menu/Menu";
import Bar from "@/components/header/Bar";
import Footer from "@/components/Footer";

export default {
  components: {
    Bar,
    Menu,
    Footer
  }
}
</script>
<style scoped>
#container {
    position: relative;
  width: calc(100vw - 40px);
  background: #f9f9f9;
  margin: 0;
  margin-left: 40px;
  padding: 0;
}

#pag-News{
  margin: 0;
  position:relative;
  padding-top: 50px;
  z-index: 10;
  background: #f9f9f9;
}
#pag-News > main {
  min-height:calc(100vw - 40px);
  margin: 0 auto;
}
header {
  width: 100%;
  min-height: 100px;
}

html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  box-sizing: border-box;
  margin: 0;
}

body {
  margin: 0;
  padding: 0;
  background-color: #f9f9f9;
  overflow-x: hidden;
}

a {
  color: unset;
  text-decoration: none;
}

a:visited {
  color: unset;
}
</style>
