import { auth } from '~/plugins/firebase'
import Autentication from '~/data/Autentication'
const Auth = new Autentication()

export default (context) => {
  const { store } = context

  return new Promise((resolve, reject) => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        return resolve(store.dispatch('Autologin', user))
      }
      return resolve()
    })
  })
}
