<template>
  <section id="presentation">
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
export default {}
</script>
<style scoped>
#presentation {
  position: relative;
  width: 100%;
  height: 500px;
  background: linear-gradient(45deg, #8100e2, #690bff);
  margin-bottom: 50px;
  display: flex;
  align-items: center;
  color: #ffffff;
}

#presentation > #Background-image {
  position: absolute;
  width: 50%;
  bottom: 0;
  right: 0;
  z-index: 0;
}

#presentation > #info {
  z-index: 2;
}

#presentation > #info > h1 {
  margin: 20px;
  font-size: 2em;
}

#presentation > #info > p {
  width: 380px;
  margin: 20px;
  font-size: 1em;
}

@media screen and (min-width: 0px) and (max-width: 480px) {
  #presentation {
    position:inherit;
    height: 90vh;
    justify-items: center;

  }

  #presentation > #Background-image {
    width: 70vw;
    z-index: 0;
    top: 30vh;
    left: 15vw;
    opacity: 0.6;
  }

  #presentation > #info {
      text-align: center;
      width: 100%;
  }

  #presentation > #info > p {
    width: 270px;
    margin: 0 auto;
  }
}

@media screen and (min-width: 481px) and (max-width: 800px) {
   #presentation {
    position:relative;
    height: 400px;
  }

  #presentation > #info > h1 {
    font-size: 1.5em;
  }

  #presentation > #info > p {
    width: 270px;
    font-size: 0.8em;
  }
}
</style>
