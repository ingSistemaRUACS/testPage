<template>
    <article>

    </article>
</template>
<script>
import { mapMutations } from 'vuex'

export default {
    layout: 'account',
    middleware:'verifyAuthenticated',
    methods:{
        ...mapMutations({
            ChangaPagAccount:'auth/ChangaPagAccount'
        })
    },
    created(){
        this.ChangaPagAccount('Eventos')
    }
}
</script>