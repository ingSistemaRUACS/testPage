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
            ChangaPagAccount:'ChangaPagAccount'
        })
    },
    created(){
        this.ChangaPagAccount('none')
    }
}
</script>