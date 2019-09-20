<template>
  <div class="Teacher">
    <img :src="src" />
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
  float: left;
  width: 50px;
  height: 50px;
}
.Teacher h1{
  float: left;
  font-size: 1em;
  color: #5c5454;
  text-align: center;
  display: flex;
  align-items: center;
  justify-items: center;
  margin-left: 20px;
}

</style>
