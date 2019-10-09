<template>
  <div id="container">
    <header>
      <Bar />
      <Presentation />
      <Menu />
    </header>
    <nuxt />
  </div>
</template>

<script>
import { mapActions } from 'vuex'

import Bar from "@/components/header/Bar";
import Menu from "@/components/menu/Menu";
import Presentation from "@/components/header/Presentation";

export default {
  components: {
    Bar,
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
  background: #fff;
  margin: 0 auto;
  padding: 20px 0;
  position: relative;
  max-width: 800px;
  box-shadow: 0px 0px 5px 2px rgb(147, 147, 147);
}

header {
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
