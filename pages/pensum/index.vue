<template>
  <article>
    <Class v-for="(item, index) in info" :key="index" :info="item" />
  </article>
</template>
<script>
import listClass from './listClass'
import Class from '@/components/pensum/Class'

export default {
  components: {
    Class
  },
  data () {
    return {
      info: listClass
    }
  }
}
</script>
