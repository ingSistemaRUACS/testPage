import Autentication from '../data/Autentication'
const Auth = new Autentication()

export const state = () => ({
  user: null
})

export const mutations = {
  editUser (state, user) {
    state.user = user
  }
}

export const actions = {
  signIn ({ commit }) {},
  verifyCode ({ commit }, code) {
    console.log(code.substring(0, 4))
    // this.$router.push('/login')
  },
  async login ({ commit }, type) {
    // const result = await Auth.login(type)
    // console.log(result.user)
    const user = await Auth.getUser()
    commit('editUser', user)
    this.$router.push('/')
  },
  logaut ({ commit }) {}
}

export const getters = {
  isAuthenticated (state) {
    return !!state.user
  },
  loggedUser (state) {
    return state.user
  }
}
