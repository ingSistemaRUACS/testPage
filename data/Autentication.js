import firebase from 'firebase'

export default class Autentication {
  constructor () {
    this.provider = new firebase.auth.GoogleAuthProvider()
    this.user = 'paja de async null'
  }

  async login (type) {
    await firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL)
    let resultAuth = null
    if (type === 'Google') {
      resultAuth = await firebase.auth().signInWithPopup(this.provider)

      return { name: resultAuth.user.displayName, photo: resultAuth.user.photoURL, email: resultAuth.user.email, phone: resultAuth.user.phoneNumber }
    }
    return null
  }

  async getUser () {
    this.user = await firebase.auth().currentUser
    if (this.user) {
      return { name: this.user.displayName, photo: this.user.photoURL, email: this.user.email, phone: this.user.phoneNumber }
    }
    return null
  }

  isAuthenticated () {
    return !!window.localStorage.getItem('firebase:host:paguniruacs.firebaseio.com')
  }
}
