import firebase from 'firebase'
import { db } from '~/plugins/firebase'

export default class Autentication {
  constructor () {
    this.provider = new firebase.auth.GoogleAuthProvider()
    this.providerFace = new firebase.auth.FacebookAuthProvider()
    this.providerTwitt = new firebase.auth.TwitterAuthProvider()
  }

  async login (type) {
    let resultAuth = null
    if (type === 'Google') {
      resultAuth = await firebase.auth().signInWithPopup(this.provider)
      return resultAuth.user
    } else if (type === 'Facebook') {
      resultAuth = await firebase.auth().signInWithPopup(this.providerFace)
      return resultAuth.user
    } else if (type === 'Twitter') {
      resultAuth = await firebase.auth().signInWithPopup(this.providerTwitt)
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

  async UpdateStudentData (id, student, data) {
    const object = { section: data.section, carnet: data.carnet }
    if (student) {
      await db.ref(`users/${id}`).update(object)
    } else {
      await db.ref(`users/${id}`).set(object)
    }
  }

  async VerifyUser (user) {
    await db.ref(`menssage/validuser/${user.id}`).set({ name: user.name, photo: user.photo })
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
      db.ref(`users/${id}`).on('value', e => resolve(e.val()))
    })
  }
}
