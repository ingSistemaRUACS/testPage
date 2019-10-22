<template>
  <div id="container">
    <header>
      <Menu />
      <Presentation />
    </header>
    <div id="pag">
        <nuxt id="info-pag"/>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

import Menu from "@/components/menu/Menu";
import Presentation from "@/components/header/Presentation";

export default {
  components: {
    Presentation,
    Menu
  },
  methods: {
    ...mapActions({ ChargeUser: "auth/ChargeUser" })
  }
};
</script>
<style>
#container {
  width: 100%;
  height: 100vh;
  position: relative;
  background: #fff;
  margin: 0;
  padding: 0;
}

#pag {
  width: 100%;
  display: grid;
  grid-template-columns: 50px 1fr;
}

#info-pag {
  width: 100%;
  grid-column: 2;
}

header {
  width: 100%;
  min-height: 100px;
  display: grid;
  grid-template-columns: 50px 1fr;
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
}

a {
  color: unset;
  text-decoration: none;
}

a:visited {
  color: unset;
}
</style>
