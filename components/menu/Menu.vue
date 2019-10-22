<template>
  <div v-if="open" id="menu-cont">
    <div id="cont-menu">
       <nuxt-link id="icon-uni" to="/">
        <img src="@/assets/UNI.svg" alt="home">
      </nuxt-link>
       <nuxt-link id="icon-user" to="/login">
        <img v-if="loggedUser" :src="loggedUser.photo" alt="user">
        <img v-else src="@/assets/defaulUser-100.jpg" alt="user">
        <h3 v-if="loggedUser" >{{loggedUser.name}}</h3>
        <h3 v-else >Iniciar sección</h3>
      </nuxt-link>
      <div id="menu">
      <nuxt-link class="icon-menu" to="/">
        <img src="@/assets/icon-menu/home.svg" alt="home">
        <h3>Inicio</h3>
      </nuxt-link>
      <nuxt-link class="icon-menu" to="/info">
        <img src="@/assets/icon-menu/info.svg" alt="info">
        <h3>Informacion</h3>
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
  width: 40px;
  height: 100vh;
  background-color: #272727;
  color: #d8d8d8;
  z-index: 1000;
}

#icon-uni {
  display:inline-block;
}

#icon-uni > img {
  display:inline-block;
  width: 30px;
  margin: 5px;
}

#icon-user {
  display:flex;
  align-items: center;
}

#icon-user > img {
  display:inline-block;
  width: 40px;
}

.icon-menu {
  display:flex;
  align-items: center;
  height: 40px;
  margin: 4px 0;
}

.icon-menu > img {
  display:inline-block;
  width: 20px;
  margin: 10px;
}

#icon-user > h3 {
  display:none;
  padding: 0 10px;
  height: 40px;
  background-color: #272727;
  font-size: 1em;
  font-weight: normal;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin: 0;
}

.icon-menu > h3 {
  display:none;
  padding: 0 10px;
  height: 40px;
  background-color: #272727;
  font-size: 1em;
  font-weight: normal;
  align-items: center;
  justify-content: center;
  margin: 0;
}

.icon-menu:hover > h3 {
  display:flex;
}

#icon-user:hover > h3 {
  display:flex;
}

</style>
