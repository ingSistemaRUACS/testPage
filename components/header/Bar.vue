<template>
  <div class="top-bar">
    <img src="@/assets/UNI.svg" alt="UNI"></img>
    <h1>RUACS | Ingenieria de Sistemas</h1>
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

.top-bar h1{
  margin-left: 20px;
  margin-top: 0;
  margin-bottom: 0;
}
</style>
