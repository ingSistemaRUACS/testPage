<template>
<section id="presentation">
    <div id="top-bar">
      <nuxt-link id="link-bar" to="/">
        <img src="@/assets/UNI.svg" alt="UNI" id="icon-uni"></img>
        <h2>RUACS | Ingenieria de Sistemas</h2>
      </nuxt-link>
    </div>
    <div id="info">
      <div>
        <h1>{{getPresent.title}}</h1>
        <p>
          {{getPresent.info}}
        </p>
      </div>
    </div>
    <img v-if="getPresent.img" :src="require(`@/assets/present/${getPresent.img}`)" id="Background-image" />
    <img src="@/assets/arrow-down-solid.svg" id="arrow-down" @click="scrollPage" />
  </section>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  created() {
    requestAnimationFrame(this.doParallax)
  },
  computed: {
    ...mapGetters(["getPresent"])
  },
  methods: {
    doParallax() {
      const infoSec = document.getElementById('info')
      const imgSec = document.getElementById('Background-image')

      const offSetWindow = -(window.pageYOffset * 0.4) | 0
      const offsetOpacity = window.pageYOffset/window.innerHeight

      if (infoSec){
        infoSec.style.transform = 'translateY(' + offSetWindow + 'px)'
        infoSec.style.opacity = 1-offsetOpacity*1.5
      }

      if (imgSec){
        imgSec.style.transform = 'translateY(' + offSetWindow + 'px)'
        imgSec.style.opacity = 1- offsetOpacity*1.5
      }
      requestAnimationFrame(this.doParallax)
    },
    scrollPage(){
      window.scrollTo({
        top: window.innerHeight,
        behavior: 'smooth'
      })
    }
  }
};
</script>
<style scoped>
#presentation {
  position:fixed;
  z-index: 0;
  width: calc(100vw - 40px);
  height: 100vh;
  background: linear-gradient(45deg, #8100e2, #690bff);
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: auto 1fr;
  color: #ffffff;
  margin: 0;
  padding: 0 20px;
}

#presentation > #top-bar {
  grid-column: span 2;
  grid-row: 1;
  width: 100%;
  height: 3.5em;
  display:flex;
  justify-content: center;
  align-items: center;
}

#top-bar > a {
  display: flex;
  justify-items: center;
  align-items: center;
  font-size: 0.9em;
  color: #fff;
}

#icon-uni {
  width: 40px;
  display: inline-block;
}

#top-bar > a > h2 {
  display: inline-block;
  font-size: 1.2em;
  margin-left: 20px;
  margin-top: 0;
  margin-bottom: 0;
}

#presentation > #Background-image {
  grid-column: 2;
  grid-row: 2;
  width: 100%;
  margin: auto 0;
  opacity: 0.9;
}

#presentation > #arrow-down{
  /* transform: scale(); */
  top: calc(100% - 80px);
  left: 50%;
  position: absolute;
  opacity: 0.5;
  animation: move-up-down 3s cubic-bezier(0.68, 0.57, 0.6, 1.56) infinite;
  transform-origin: center;
}

#presentation > #info {
  grid-column: 1;
  grid-row: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40vw;
  height: 100%;
  margin: 0;
}

#presentation > #info > div > h1 {
  max-width: 400px;
  font-size: 2em;
  margin: 0 auto;
  margin-bottom: 20px;
}

#presentation > #info > div > p {
  max-width: 400px;
  margin: 0 auto;
  font-size: 1em;
}

@media screen and (min-width: 1281px) and (max-width: 1920px) {
#top-bar > a {

  font-size: 1.1em;
}

#icon-uni {
  width: 50px;
  display: inline-block;
}
}
@media screen and (min-width: 0px) and (max-width: 900px) {
  #presentation {
    grid-template-columns: 100%;
    grid-template-rows: auto auto 1fr auto;
  }

  #presentation > #Background-image {
    grid-column: 1;
    grid-row: 4;
    width: 80%;
    margin: 0 10%;
  }

  #presentation > #info {
    grid-row: 2;
    width: 80%;
    margin: 5% 10%;
    text-align: center;
    font-size: 0.8em;
  }

  #presentation > #top-bar {
  grid-column:1;
  grid-row: 1;
  width: 100%;
  margin: 0;
  height: 3.5em;
  display:inline-block;
}

#top-bar > a {
  display:flex;
  width: 100%;
  height: 100%;
  font-size: 0.9em;
  color: #fff;
  align-items: center;
  justify-content: center;
}

#icon-uni {
  display: none;
}
}

@keyframes move-up-down {
  0%{
    opacity: 0;
    transform: translateY(-40px);
    width: 30px;
  }
  85%{
    opacity: 0.8;
    transform: translateY(0);
    /* width: 35px; */
  }
  86%{
    opacity: 0.8;
    transform: translateY(0);
  }

  /* 92%{
    transform: translateY(-10px);
  } */

  100%{
    opacity: 0;
    width: 30px;
    /* transform: translateY(0); */
  }
}

</style>
