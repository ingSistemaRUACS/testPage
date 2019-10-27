<template>
    <article>
        <div id="container-publication">
            <nuxt-link id="btn-public" to="/publications/new">Nueva Publicacion</nuxt-link>
        </div>
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
#container-publication {
    background-color: #ffffff;
    width: 80%;
    height: auto;
    padding: 10% 5%;
    border-radius: 5px;
    margin: 10% 30px;
    box-shadow: 0px 7px 28px 18px rgba(199, 199, 199, 0.171);
}
#btn-public {
  background:  #5700e2;
  font-size: 1.1em;
  border-radius: 5px;
  color: white;
  width: 70px;
  height: 50px;
  padding: 15px 20px;
  border: none;
  margin: 10px;
}
</style>