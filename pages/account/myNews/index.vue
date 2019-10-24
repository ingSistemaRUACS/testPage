<template>
    <article>
        <nuxt-link id="btn-public" to="/publications/new">Nueva Publicacion</nuxt-link>
    </article>
</template>
<script>
import { mapMutations } from 'vuex'

export default {
    layout: 'account',
    middleware:'verifyAuthenticatedAdmin',
    methods:{
        ...mapMutations({
            ChangaPagAccount:'ChangaPagAccount'
        })
    },
    created(){
        this.ChangaPagAccount('Publicaciones')
    }
}
</script>
<style scoped>
#btn-public {
  background:  #0b69ff;
  color: white;
  width: 70px;
  height: 50px;
  padding: 10px;
  border: none;
  margin: 10px;
}
</style>