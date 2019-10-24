<template>
  <div id="container">
    <header>
      <Menu />
      <Presentation />
    </header>
    <div id="pag-article"> 
      <nuxt />
       <Footer />
    </div>  
  </div>
</template>

<script>
// solo para ....
import { mapActions } from 'vuex'

import Menu from "@/components/menu/Menu";
import Bar from "@/components/header/Bar";
import Footer from "@/components/Footer";

export default {
  components: {
    Presentation,
    Bar,
    Footer
  },
  methods: {
    ...mapActions({ ChargeUser: "auth/ChargeUser" })
  }
};
</script>
<style>
#container {
  position: relative;
  width: calc(100vw - 40px);
  background: #fff;
  margin: 0;
  margin-left: 40px;
  padding: 0;
}

#pag-article {
  margin: 0;
  position:relative;
  padding-top: 100px;
  background: #fff;
  margin-top: 100vh;
  z-index: 10;
}
#pag-article > article {
  min-height: 100vh;
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
  background-color: rgb(235, 235, 235);
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
