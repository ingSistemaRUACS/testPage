<template>
  <main>
    <Timeline :publicaciones="publicaciones" id="tm" />
  </main>
</template>
<script>
import Timeline from '@/components/timeline/Timeline'
import { firestore } from '@/plugins/firebase'
export default {
  components: {
    Timeline
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
#tm{
  width: 60%;
  margin: 0 auto;
}
</style>
