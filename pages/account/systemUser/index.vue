<template>
    <article>

    </article>
</template>
<script>
import { mapMutations } from 'vuex'

export default {
    layout: 'account',
    methods:{
        ...mapMutations({
            ChangaPagAccount:'auth/ChangaPagAccount'
        })
    },
    created(){
        this.ChangaPagAccount('Usuarios')
    }
}
</script>