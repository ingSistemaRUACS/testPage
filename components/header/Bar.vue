<template>
  <div class="top-bar">
    <nuxt-link id="link-bar" to="/">
    <img src="@/assets/UNI.svg" alt="UNI" id="icon-uni"></img>
    <h2>RUACS | Ingenieria de Sistemas</h2>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  created () {
    addEventListener('scroll', () => {
      const el = this.$el
      el.style.top = pageYOffset + 'px'
    })
  }
}
</script>

<style scoped>
.top-bar{
  position: absolute;
  background: #474747;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  height: 3.5em;
  width: 100%;
  /* padding: 0 50px; */
  box-shadow: 0 3px 0 #7979798f;
  margin: 0;
  z-index: 1000;
}

#link-bar {
  display:inherit;
  align-items: center;
}
#icon-uni
{
  width: 40px;
}

.top-bar > a > h2{
  font-size: 1.2em;
  margin-left: 20px;
  margin-top: 0;
  margin-bottom: 0;
}

@media screen and (max-width: 430px) {
  #icon-uni
  {
    width: 10%;
  }

  .top-bar > h1{
    font-size: 1rem;
  }
}
</style>
