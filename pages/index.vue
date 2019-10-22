<template>
  <main>
    <Timeline id="tm" />
  </main>
</template>
<script>
import { mapMutations } from 'vuex'
import Timeline from '@/components/timeline/Timeline'

export default {
  components: {
    Timeline
  },
  methods:{
    ...mapMutations(['ChangePresent'])
  },
  beforeMount(){
    this.ChangePresent({
      title:'¿Qué es la Ingeniería de Sistema?',
      info:'Es la ingeniería que se encarga del diseño, la programación, la implantación y el mantenimiento de sistemas. A diferencia de otras especialidades, esta disciplina no se ocupa de productos tangibles sino de productos lógicos.',
      img:'presentHome.svg'})
  }
}
</script>

<style>
#tm{
  width: 60%;
  margin: 0 auto;
}
</style>
