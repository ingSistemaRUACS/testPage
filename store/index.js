import Vuex from 'vuex'

import Autentication from '~/data/Autentication'
const Auth = new Autentication()

const auth = () => {
  return new Vuex.Store({
    state: {
      user: null,
      pagAccount: '',
      student: null,
      StockMessage: false
    },
    getters: {
      isAuthenticated (state) {
        return !!state.user
      },
      loggedUser (state) {
        return state.user
      },
      getPagAccount (state) {
        return state.pagAccount
      },
      getDataStudent (state) {
        return state.student
      },
      geStockMessage (state) {
        return state.StockMessage
      }
    },
    actions: {
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
      },
      async UserRemove ({ commit }) {
        await Auth.Delete()
        commit('resetUser')
        this.$router.push('/')
      },
      async UpdateUser ({}, data) {
        await Auth.Update(data)
      },
      async UpdateStudentData ({ state }, data) {
        await Auth.UpdateStudentData(state.user.id, !!state.student, data)
      },
      async ChargeStudentData ({ commit, state }) {
        const data = await Auth.DataStudent(state.user.id)
        commit('UpdateStudentData', data)
      },
      async VerifyUser ({ state, dispatch }) {
        if (state.student) {
          if (!state.student.hasOwnProperty('verify')) {
            await Auth.VerifyUser(state.user.id)
            dispatch('StockMessageVerifyUser')
          }
        } else {
          await Auth.VerifyUser(state.user.id)
          dispatch('StockMessageVerifyUser')
        }
      },
      async StockMessageVerifyUser ({ commit, state }) {
        const resp = await Auth.StockMessageVerifyUser(state.user.id)
        commit('UpdateStockMessage', resp)
      }
    },
    mutations: {
      editUser (state, user) {
        state.user = { id: user.uid, name: user.displayName, photo: user.photoURL, email: user.email, phone: user.phoneNumber }
      },
      ChangaPagAccount (state, pag) {
        state.pagAccount = pag
      },
      resetUser (state) {
        state.user = null
      },
      UpdateStudentData (state, data) {
        state.student = data
      },
      UpdateStockMessage (state, resp) {
        state.StockMessage = resp
      }
    }
  })
}

export default auth
