<template>
  <section class="login">
    <img id="icon-user" src="@/assets/icon-login/icon-user.svg"/>
    <div>
      <button v-for="(item, index) in UserButton" :key="index" :id="'button-'+item.name" class="button-login" @click="login(item.name)">
        <img :src="item.src" />
        <h1>Iniciar Sesión en {{ item.name }}</h1>
      </button>
    </div>
  </section>
</template>
<script>
import { mapActions } from 'vuex'

export default {
  middleware:'verifyLogin',
  layout: 'register',
  data () {
    return {
      UserButton: [
        { name: 'Google', src: require('@/assets/icon-login/google.svg') },
        { name: 'Facebook', src: require('@/assets/icon-login/facebook-f.svg') },
        { name: 'Twitter', src: require('@/assets/icon-login/twitter.svg') }
      ]
    }
  },
  methods: {
    ...mapActions(['login'])
  }
}
</script>
<style scoped>

.login {
  width: 100%;
}

#icon-user
{
  display:block;
  width: 100px;
  margin: 5px auto;
}

.button-login {
  background-color: #ffffff;
  width: 250px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-items: center;
  border: none;
  margin: 5px auto;
}

.button-login > img {
  width: 15px;
  margin-left: 10px;
}

.button-login > h1 {
  font-size: 1em;
  margin-left: 20px;
}

#button-Google {
  color: #db4a39;
}

#button-Facebook {
  color: #3b5998;
}

#button-Twitter {
  color: #00acee;
}

</style>
