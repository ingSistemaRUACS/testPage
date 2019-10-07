import Autentication from '../data/Autentication'
const Auth = new Autentication()

export const state = () => ({
  user: null,
  pagAccount: ''
})

export const mutations = {
  editUser (state, user) {
    state.user = user
  },
  ChangaPagAccount (state, pag) {
    state.pagAccount = pag
  }
}

export const actions = {
  signIn ({ commit }) { },
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
  async ChargeUser ({ commit, state }) {
    if (!state.user) {
      const user = await Auth.getUser()
      commit('editUser', user)
    }
  },
  logaut ({ commit }) { }
}

export const getters = {
  isAuthenticated (state) {
    return Auth.isAuthenticated()
  },
  loggedUser (state) {
    return state.user
  },
  pagAccount (state) {
    return state.pagAccount
  }
}
