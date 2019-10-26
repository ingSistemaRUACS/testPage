<template>
  <div class="Teacher">
    <img :src="src" />
    <div id="name">
      <h1>{{ name }}</h1>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    src: {
      type: String,
      required: true,
      default: ''
    },
    name: {
      type: String,
      required: true,
      default: ''
    }
  }
}
</script>
<style scoped>
.Teacher {
  position: relative;
  width: 200px;
  height: 300px;
  margin: 40px 5%;
  border: #b1b1b1 solid 0.3px;
  box-shadow: 0px 7px 28px 18px rgba(199, 199, 199, 0.171);
  border-radius: 5px;
}
.Teacher img{
  width: 200px;
  border-radius: 5px 5px 0 0;
}
.Teacher #name{
  position: absolute;
  background-color: white;
  bottom: 0;
  width: 100%;
  height: 100px;
  font-size: 0.8em;
  color: #292929;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
}
.Teacher #name > h1{
  max-width: 160px;
}

</style>
