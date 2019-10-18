import firebase from 'firebase'
import { db } from '~/plugins/firebase'

export default class Autentication {
  constructor () {
    this.provider = new firebase.auth.GoogleAuthProvider()
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
  // TODO: revisar luego
  async DataUser () {
    const user = await firebase.auth().currentUser
    return user
  }

  async Update (data) {
    await firebase.auth().currentUser.updateProfile({ displayName: data.name, phoneNumber: data.phone })
  }

  async UpdateStudentData (id, student, data) {
    const object = { section: data.section, carnet: data.carnet }
    if (student) {
      await db.ref(`profile/student/${id}`).update(object)
    } else {
      await db.ref(`profile/student/${id}`).set(object)
    }
  }

  async VerifyUser (id) {
    await db.ref(`menssage/validuser/${id}`).set(true)
  }

  StockMessageVerifyUser (id) {
    return new Promise((resolve, reject) => {
      db.ref(`menssage/validuser/${id}`).on('value', (e) => {
        if (e.val()) {
          resolve(true)
        }
        resolve(false)
      })
    })
  }

  DataStudent (id) {
    return new Promise((resolve, reject) => {
      db.ref(`profile/student/${id}`).on('value', e => resolve(e.val()))
    })
  }

  async Delete () {
    const user = await firebase.auth().currentUser
    await db.ref(`profile/student/${user.uid}`).remove()
    await db.ref(`menssage/validuser/${user.uid}`).remove()
    await firebase.auth().signOut()
  }
}
