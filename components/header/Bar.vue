<template>
  <section class="top-bar">
    <img src="@/assets/UNI.svg" alt="UNI"></img>
    <h1>RUACS | Ingenieria de Sistemas</h1>
  </section>
</template>

<script>
export default {}
</script>

<style scoped>
.top-bar{
  position: fixed;
  background: #474747;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  height: 60px;
  min-width: 70vw;
  left: calc(35vw/2);
  /* padding: 0 50px; */
  box-shadow: 0 3px 0 #7979798f;
}

.top-bar h1{
  margin-left: 20px;
}
</style>
