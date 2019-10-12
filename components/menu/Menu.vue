<template>
  <div id="menu-cont">
    <div id="menu">
      <nuxt-link class="icon-menu" to="/"><img src="@/assets/icon-menu/home.svg" alt="home"></nuxt-link>
      <nuxt-link class="icon-menu" to="/info"><img src="@/assets/icon-menu/info.svg" alt="info"></nuxt-link>
      <nuxt-link class="icon-menu" to="/teachers"><img src="@/assets/icon-menu/chalkboard-teacher.svg" alt="teacher"></nuxt-link>
      <nuxt-link class="icon-menu" to="/pensum"><img src="@/assets/icon-menu/project-diagram.svg" alt="project"></nuxt-link>
      <nuxt-link id="icon-user" to="/login"><img v-if="loggedUser" :src="loggedUser.photo" alt="user"><img v-else src="@/assets/defaulUser-100.jpg" alt="user"></nuxt-link>
    </div>
    <label id="resp-button">
      <input
        type="checkbox"
        name="resp-button"
        id="rb"
        v-model="slideShown"
        @change="toggleVisible"><span id="arrow">❯</span></label>
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
  methods: {
    toggleVisible () {
      this.toggleClassDisplayed()
    },
    toggleClassDisplayed () {
      const menEl = document.querySelector('#menu')
      menEl.classList.toggle('displayed')
    }
  },
  computed: {
    ...mapGetters({loggedUser:'loggedUser'}),
  },
  
}
</script>

<style>
#menu-cont{
  display: flex;
  position: fixed;
  top: 60px;
  transform: translate(0, 5px);
  z-index: 1000;
}

#resp-button{
  display: none;
  width: 40px;
  height: 40px;
  background: #000000a1;
  color: rgb(255, 255, 255);
  font-size: 1.6em;
  border-radius: 2px;
  justify-content: center;
  align-items: center;
  user-select: none;
  cursor: pointer;
}

#resp-button #arrow{
  transition: transform 0.5s ease;
}

#rb{
  display: none;
}

#menu{
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 50px;
  height: 220px;
  background: #979797;
  transform: translate(-55px);
  color: #fff;
  text-align: center;
  font-size: 2em;
  transition: transform 0.5s;
}

#menu>.icon-menu{
  transition: color ease 0.25s;
}

#menu>.icon-menu>img{
  width: 22px;
}

#icon-user{
  height: 50px;
}

#icon-user>img{
  width: 100%;
}

#menu>a:hover{
  color: rgb(40, 39, 61);
}

@media(max-width: 920px) {
  #resp-button{
    display: flex;
    margin-left: 10px;
  }

  #menu{
    display: none;
    background: #3f3f3f;
  }

  #menu.displayed{
    display: flex;
    transform: translate(5px);
  }

  #menu.displayed+#resp-button #arrow{
    transform: rotate(180deg);
  }
}
</style>
