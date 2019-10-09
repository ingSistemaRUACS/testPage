import Vuex from 'vuex'

import Autentication from '../data/Autentication'
const Auth = new Autentication()

const auth = () => {
  return new Vuex.Store({
    state: {
      user: null,
      pagAccount: ''
    },
    getters: {
      isAuthenticated (state) {
        return !!state.user
      },
      loggedUser (state) {
        return state.user
      }
    },
    actions: {
      verifyCode ({ commit }, code) {
        console.log(code.substring(0, 4))
        // this.$router.push('/login')
      },
      async login ({ commit }, type) {
        const result = await Auth.login(type)
        if (result) {
          commit('editUser', result)
          this.$router.push('/')
        }
      },
      async Logout ({ commit }) {
        await Auth.Logout()
        commit('resetUser')
        this.$router.push('/')
      }
    },
    mutations: {
      editUser (state, user) {
        state.user = { name: user.displayName, photo: user.photoURL, email: user.email, phone: user.phoneNumber }
      },
      ChangaPagAccount (state, pag) {
        state.pagAccount = pag
      },
      resetUser (state) {
        state.user = null
      }
    }
  })
}

export default auth
