<template>
  <section id="presentation">
    <img src="@/assets/PresentationTemp.svg" id="Background-image" />
    <div id="form-info" v-if="loggedUser">
      <img id="icon-user" :src="loggedUser.photo" />
      <div id="info-user">
        <h1>{{ loggedUser.name.replace(/\b\w/g, l => l.toUpperCase()) }}</h1>
        <h2>{{ loggedUser.email }}</h2>
        <h2>{{ loggedUser.phone }}</h2>
      </div>
    </div>
  </section>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters({
      loggedUser: "loggedUser"
    })
  }
};
</script>
<style scoped>
#presentation {
  position: relative;
  width: 100%;
  height: 500px;
  background: linear-gradient(45deg, #8100e2, #690bff);
}

#presentation > #Background-image {
  position: absolute;
  width: 50%;
  bottom: 0;
  right: 0;
  z-index: 0;
}

#form-info {
  position:absolute;
  width: 100%;
  bottom: 0;
  z-index: 0;
  display: grid;
  grid-gap: 0;
  grid-template-columns: 1fr auto;
  grid-template-rows: 1fr auto;
  color: #ebebeb;
}

#form-info > #icon-user {
  grid-column: 2;
  grid-row: span 2;
  width: 180px;
  height: 180px;
  right: 0;
  border-top: solid #474747 7px;
  border-left: solid #474747 7px;
}

#form-info > #info-user {
  grid-column: 1;
  grid-row: 2;
  width: 91%;
  height: auto;
  padding: 5px 0;
  bottom: 0;
  background: #474747;
  padding-left: 10%;
}
#form-info > #info-user > h1 {
  font-size: 1.2em;
  margin-bottom: -10px;
}
#form-info > #info-user > h2 {
  font-size: 1em;
  font-weight: normal;
}
@media screen and (min-width: 0px) and (max-width: 480px) {
  #presentation {
    position:relative;
    height: 90vh;
  }

  #presentation > #Background-image {
    width: 70vw;
    z-index: 0;
    top: 30vh;
    margin: 0 15vw;
    opacity: 0.6;
  }

  #form-info {
    width: 100%;
    z-index: 0;
    display: grid;
    grid-template-columns: 1fr auto;
    grid-template-rows: 1fr auto;
  }

  #form-info > #icon-user {
    width: 120px;
    height: 120px;
  }

  #form-info > #info-user > h1 {
    font-size: 1em;
  }

  #form-info > #info-user > h2 {
    font-size: 0.8em;
  }
}

@media screen and (min-width: 481px) and (max-width: 800px) {
  #presentation {
    position: relative;
    height: 400px;
  }
}
</style>
