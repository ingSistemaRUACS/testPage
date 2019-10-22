<template>
  <div v-if="open" id="menu-cont">
    <div id="menu-icon">
       <nuxt-link class="icon-menu" to="/">
        <img src="@/assets/UNI.svg" alt="home">
      </nuxt-link>
    </div>
    <div id="cont-menu">
      <div id="menu">
      <nuxt-link class="icon-menu" to="/">
        <img src="@/assets/icon-menu/home.svg" alt="home">
        <h3>Inicio</h3>
      </nuxt-link>
      <nuxt-link class="icon-menu" to="/info">
        <img src="@/assets/icon-menu/info.svg" alt="info">
        <h3>Informaci??n</h3>
      </nuxt-link>
      <nuxt-link class="icon-menu" to="/teachers">
        <img src="@/assets/icon-menu/chalkboard-teacher.svg" alt="teacher">
        <h3>Docentes</h3>
      </nuxt-link>
      <nuxt-link class="icon-menu" to="/pensum">
        <img src="@/assets/icon-menu/project-diagram.svg" alt="project">
        <h3>Pensum</h3>
      </nuxt-link>
      </div>
    </div>
    <div id="menu-user">
 <nuxt-link id="icon-user" to="/login">
        <img v-if="loggedUser" :src="loggedUser.photo" alt="user">
        <img v-else src="@/assets/defaulUser-100.jpg" alt="user">
        <h3 v-if="loggedUser" >{{loggedUser.name}}</h3>
        <h3 v-else >Iniciar secci?n</h3>
      </nuxt-link>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'

export default {
  data () {
    return {
      slideShown: false
    }
  },
  computed: {
    ...mapGetters({loggedUser:'loggedUser'}),
  },
  props:{
    open:{
      type: Boolean,
      default: true
    }
  }
  
}
</script>
<style scoped>
#menu-cont {
  grid-column: 1;
  position:fixed;
  top:0;
  left: 0;
  width: 50px;
  height: 100vh;
  background-color: #272727;
  color: #d8d8d8;
  display: grid;
  grid-template-rows: auto 1fr auto;
  z-index: 1000;
}

#fond-menu{
  display: none;
}

#menu-icon > a> img {
  width: 30px;
  margin: 10px;
}

#cont-menu {
  height: 100%;
  display: flex;
  align-items: center;
}

#menu > a {
  display: flex;
  padding: 5px;
  height: 50px;
  align-items: center;
}
#menu-user > a {
  display: flex;
  height: 50px;
  align-items: center;
}

#menu > a> img {
  display: inline-block;
  width: 30px;
}

#menu-user > a> img {
  display:inline-block;
  width: 50px;
}

#menu > a> h3 {
  display: none;
  background-color: #272727;
  padding: 5px 10px;
  width: 150px;
  margin: 5px;
}

#menu > a:hover > h3 {
  display:inline-block;
}

#menu-user > a > h3 {
  display: none;
  align-items: center;
  background-color: #272727;
  width: 150px;
  height: 50px;
  padding: 0 10px;
}

#menu-user > a:hover > h3 {
  display:flex;
}
</style>
