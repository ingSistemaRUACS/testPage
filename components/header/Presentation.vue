<template>
  <section id="presentation">
      <div id="top-bar">
       <nuxt-link id="link-bar" to="/">
    <img src="@/assets/UNI.svg" alt="UNI" id="icon-uni"></img>
    <h2>RUACS | Ingenieria de Sistemas</h2>
    </nuxt-link>
    </div>
   <img src="@/assets/PresentationTemp.svg" id="Background-image" />
    <div id="info">
      <h1>Titulo de la pagina</h1>
      <p>
        is simply dummy text of the printing and typesetting industry. Lorem
        Ipsum has been the industry's standard dummy text ever since the 1500s,
        when an unknown printer took a galley of type and scrambled it to make a
        type specimen book. It has survived not only five centuries, but also
        the leap into electronic typesetting, remaining essentially unchanged.
      </p>
    </div>
  </section>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["getPresent"])
  }
};
</script>
<style scoped>
#presentation {
  grid-column: 2;
  position: relative;
  width: 100%;
  height: 550px;
  background: linear-gradient(45deg, #8100e2, #690bff);
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: auto 1fr;
  color: #ffffff;
  margin: 0;
  margin-bottom: 50px;
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
  width: 95%;
  margin: auto 2.5%;
  opacity: 0.9;
}

#presentation > #info {
  grid-column: 1;
  grid-row: 2;
  width: 40vw;
  margin: auto 0;
}

#presentation > #info > h1 {
  width: 400px;
  font-size: 2em;
  margin: 0 auto;
  margin-bottom: 20px;
}

#presentation > #info > p {
  width: 400px;
  margin: 0 auto;
  font-size: 1em;
}

@media screen and (min-width: 0px) and (max-width: 480px) {
  #presentation {
    position: relative;
    height: 100vh;
    grid-template-columns: 100%;
    grid-template-rows: auto auto 1fr;
  }

  #presentation > #Background-image {
    grid-column: 1;
    grid-row: 3;
    width: 100%;
  }

  #presentation > #info {
    font-size: 0.8em;
    grid-row: 2;
    width: 90%;
    margin: 30px 5%;
    text-align: center;
  }

  #presentation > #info > h1 {
    width: 100%;
  }

  #presentation > #info > p {
    width: 100%;
  }

  #presentation > #top-bar {
  grid-column:1;
  grid-row: 1;
  width: 90%;
  margin: 0 5%;
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
  justify-items: center;
}

#icon-uni {
  display: none;
}
}
</style>
