<template>
<nuxt-link to="/">
  <div class="top-bar">
    <img src="@/assets/UNI.svg" alt="UNI" id="icon-uni"></img>
    <h2>RUACS | Ingenieria de Sistemas</h2>
  </div>
</nuxt-link>
</template>
<style scoped>

#presentation > #top-bar {
  position: flex;
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
</style>