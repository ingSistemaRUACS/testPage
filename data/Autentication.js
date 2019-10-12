import firebase from 'firebase'

export default class Autentication {
  constructor () {
    this.provider = new firebase.auth.GoogleAuthProvider()
    this.user = 'paja de async null'
  }

  async login (type) {
    let resultAuth = null
    if (type === 'Google') {
      resultAuth = await firebase.auth().signInWithPopup(this.provider)
      return resultAuth.user
    }
    return null
  }

  async Logout () {
    await firebase.auth().signOut()
  }

  isAuthenticated () {
    return !!window.localStorage.getItem('firebase:host:paguniruacs.firebaseio.com')
  }
}
