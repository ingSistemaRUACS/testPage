<template>
    <article>
        <nuxt-link to="/publications/new">Nueva Publicacion</nuxt-link>
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