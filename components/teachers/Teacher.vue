<template>
  <div class="Teacher">
    <img :src="src"></img>
    <h1>{{ name }}</h1>
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
  max-width: 250px;
  height: 75px;
}
.Teacher img{
  display: inline-block;
  float: left;
  width: 50px;
}
.Teacher h1{
  float: left;
  font-size: 1em;
  color: #4b4b4b;
  text-align: center;
  display: flex;
  align-items: center;
  justify-items: center;
  margin-left: 20px;
  margin-top: 20px;
}

</style>
