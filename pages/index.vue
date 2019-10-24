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
    this.ChangePresent(0)
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
