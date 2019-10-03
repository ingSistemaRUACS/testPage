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
  middleware:'verifyAuthenticated',
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
    ...mapActions({
      login:'auth/login'
    })
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
  color: #ffff;
  margin-left: 20px;
}

#button-Google {
  background-color: #db4a39;
}

#button-Facebook {
  background-color: #3b5998;
}

#button-Twitter {
  background-color: #00acee;
}

#login-class {
  width: 250px;
  margin: 30px auto;
}

#login-class > input {
  width: 240px;
  font-size: 1em;
  border: none;
  margin: 3px auto;
  padding: 10px 5px;
}

#login-class > input[type=submit] {
  width: 250px;
  margin-top: 10px;
  background-color: #007BFF;
  color: white;
  padding: 15px 5px;
}

#register {
  display: inline-block;
  text-align: center;
  width: 250px;
  margin: 5px auto;
  color: #2be055;
}

</style>
