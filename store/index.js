import Vuex from 'vuex'

import Autentication from '~/data/Autentication'
import Users from '~/data/Users'

const Auth = new Autentication()
const User = new Users()

const auth = () => {
  return new Vuex.Store({
    state: {
      user: null,
      pagAccount: '',
      student: null,
      StockMessage: false,
      ListVerify: [],
      present: {},
      process: false
    },
    getters: {
      isAuthenticated (state) {
        return !!state.user
      },
      isStudentVerified (state) {
        return !!(state.student && state.student.verify)
      },
      isAdmin (state) {
        if (state.student) {
          if (state.student.hasOwnProperty('admin')) {
            return state.student.admin
          }
        }
        return false
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
      },
      getListVerify (state) {
        return state.ListVerify
      },
      getPresent (state) {
        return state.present
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
      async Autologin ({ commit, dispatch }, user) {
        const data = await Auth.DataStudent(user.uid)
        commit('editUser', user)
        commit('UpdateStudentData', data)
      },
      async Logout ({ commit }) {
        await Auth.Logout()
        commit('resetUser')
        this.$router.push('/')
      },
      // Actiliza los datos del estudiante
      async UpdateStudentData ({ state }, data) {
        await Auth.UpdateStudentData(state.user.id, !!state.student, data)
      },
      // carga los datos del estudiante
      async ChargeStudentData ({ commit, state }) {
        const data = await Auth.DataStudent(state.user.id)
        commit('UpdateStudentData', data)
      },
      // solicitud de verificacion por el usuario
      async VerifyUser ({ state, dispatch }) {
        if (state.student) {
          if (!state.student.hasOwnProperty('verify')) {
            await Auth.VerifyUser(state.user)
            dispatch('StockMessageVerifyUser')
          }
        } else {
          await Auth.VerifyUser(state.user.id)
          dispatch('StockMessageVerifyUser')
        }
      },
      // retorna la respuesta de verificacion
      async StockMessageVerifyUser ({ commit, state }) {
        const resp = await Auth.StockMessageVerifyUser(state.user.id)
        commit('UpdateStockMessage', resp)
      },
      // carga lista de usuarios a verificar
      async ChargeListVerifyUser ({ commit, state }) {
        let userVerify = []
        try {
          userVerify = await User.UsersVerify()
        } catch (error) {
          userVerify = []
        } finally {
          if (!state.process) {
            commit('UpdateListVerify', userVerify)
          }
        }
      },
      // comentar y revisar
      async verifyUsers ({ dispatch, commit }, users) {
        commit('EditProsses', true)
        const resp = await User.ValidUsers(users)
        if (resp) {
          commit('UpdateListVerify', [])
          commit('EditProsses', false)
          this.$router.go()
        }
      }
    },
    mutations: {
      EditProsses (state, active) {
        state.process = active
      },
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
        state.student = null
        state.student = data
      },
      UpdateStockMessage (state, resp) {
        state.StockMessage = resp
      },
      UpdateListVerify (state, listUser) {
        if (listUser) {
          state.ListVerify = listUser
        } else {
          state.ListVerify = []
        }
      },
      RemoveListVerify (state, i) {
        state.ListVerify.splice(i, 1)
      },
      ChangePresent (state, present) {
        state.present = present
      }
    }
  })
}

export default auth
