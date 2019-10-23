<template>
  <section id="presentation">
      <div id="top-bar">
       <nuxt-link id="link-bar" to="/">
    <img src="@/assets/UNI.svg" alt="UNI" id="icon-uni"></img>
    <h2>RUACS | Ingenieria de Sistemas</h2>
    </nuxt-link>
  </div>
    <img src="@/assets/present/presentAccount.svg" id="Background-image" />
    <div id="form-info" v-if="loggedUser">
      <div>
        <div id="form-user-container">
      <img id="icon-user" :src="loggedUser.photo" />
      <div id="info-user">
        <h1>{{ loggedUser.name.replace(/\b\w/g, l => l.toUpperCase()) }}</h1>
        <h2>{{ loggedUser.email }}</h2>
        <h3 v-if="getDataStudent">{{ getDataStudent.carnet }}</h3>
        </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(['loggedUser','getDataStudent'])
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

#presentation > #form-info {
  grid-column: 1;
  grid-row: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40vw;
  height: 100%;
  margin: 0;
}

#presentation > #form-info > div {
  display:flex;
  align-items: center;
  justify-content: center;
  width: 220px;
  height: 350px;
  margin: 0 10%;
  background-color:  #272727;
  text-align: center;
  box-shadow: 8px 9px 0px 0px rgba(0,0,0,0.44);
}

#form-user-container > img{
  width: 140px;
}

#info-user {
  margin: 10px;
}

#info-user > h1{
  font-size: 1.4em;
  margin: 5px;
}

#info-user > h2{
  font-size: 1.1em;
  font-weight: normal;
  color: #a0a0a0;
  margin: 2px;
}

#info-user > h3{
  font-size: 0.9em;
  font-weight: normal;
  color: #838383;
  margin: 1px;
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
    margin:5%;
  }

  #presentation > #form-info {
    grid-row: 2;
    width: 100%;
    margin-top: 20px;
  }
 #presentation > #form-info > div {
  display:flex;
  align-items: center;
  justify-content: center;
  width: 400px;
  height: 200px;
  margin: 0;
}

#form-user-container {
  display:flex;
  align-items: center;
  justify-content: center;
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
@media(max-width: 400px) {
#presentation > #form-info {
  grid-column: 1;
  grid-row: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: auto;
  margin: 0;
}

#presentation > #form-info > div {
  display:flex;
  align-items: center;
  justify-content: center;
  width: 180px;
  height: 250px;
  margin: 0 auto;
  background-color:  #272727;
  text-align: center;
}
#form-user-container {
  display:inline;
}
#form-user-container > img{
  width: 110px;
}

#info-user {
  margin: 10px;
}

#info-user > h1{
  font-size: 1.2em;
  margin: 5px;
}

#info-user > h2{
  font-size: 1em;
  font-weight: normal;
  color: #a0a0a0;
  margin: 2px;
}

#info-user > h3{
  font-size: 0.8em;
  font-weight: normal;
  color: #838383;
  margin: 1px;
}
}
</style>
