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
