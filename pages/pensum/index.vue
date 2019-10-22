<template>
  <article>
    <div class="ListClass">
      <Class v-for="(item, index) in info" :key="index" :info="item" />
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
    this.ChangePresent({
      title:'Pensum',
      info:'A continuaciÃ³n, podrÃ¡ observar un diagrama con las clases ordenadas por aÃ±o y semestre que componen la carrera.',
      img:'presentPensum.svg'})
  }
}
</script>
<style scoped>
article{
  width: 100%;
}
@media screen and (min-width: 320px) and (max-width: 479px) {
  article {
    display: flex;
    justify-items: center;
  }
  .ListClass {
    display: grid;
    grid-gap: 10px;
    grid-template-columns: auto;
  }
}

@media screen and (min-width: 480px) and (max-width: 719px) {
  article {
    width: 100%;
  }
  .ListClass {
    width: 360px;
    margin: 0px auto;
    display: grid;
    grid-gap: 10px;
    grid-template-columns: 350px;
  }
}

@media screen and (min-width: 720px) {
  article {
    width: 100%;
  }
  .ListClass {
    width: 710px;
    margin: 0px auto;
    display: grid;
    grid-gap: 10px;
    grid-template-columns: repeat(2, 350px);
  }
}
</style>
