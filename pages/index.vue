<template>
<article>
  <Timeline :publicaciones="publicaciones" id="tm" />
</article>
</template>
<script>
import { mapMutations } from 'vuex'
import Timeline from '@/components/timeline/Timeline'
import { firestore } from '@/plugins/firebase'
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
  },
  asyncData () {
    const ref = firestore.collection('posts')
    return ref.get().then(result => {
      const dcs = []
      result.forEach(doc => dcs.push(doc))

      return {
        publicaciones: dcs.map(x => ({id: x.id, ...x.data()}))
      }
    })
  }
}
</script>
<style>
article{
  max-width: 800px;
  width: 100%;
}
#tm {
  min-width: 300px;
  width: 60%;
  margin: 0 auto;
}
@media screen and (max-width: 400px) {
  #tm {
  min-width: 100%;
  width: 100%;
  margin: 0;
}
}
</style>
