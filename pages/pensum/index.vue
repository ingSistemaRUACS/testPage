<template>
  <article>
    <div class="ListClass">
      <img id="pensum" src="@/assets/pensum.svg" alt="">
    </div>
  </article>
</template>
<script>
import { mapMutations } from 'vuex'
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
  },
  methods:{
    ...mapMutations(['ChangePresent'])
  },
  beforeMount(){
    this.ChangePresent(1)
  }
}
</script>
<style scoped>
article{
  max-width: 800px;
  width: 100%;
}

#pensum {
  width: 90%;
  margin: 5%;
}

</style>
