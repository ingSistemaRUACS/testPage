import firebase from 'firebase/app'
import fireConfig from '~/fireconfig'

let app = null
if (!firebase.apps.length) {
  app = firebase.initializeApp(fireConfig)
}

export const db = app.database()
export const GoogleProvider = new firebase.auth.GoogleAuthProvider()
export const auth = firebase.auth()
export const functions = firebase.functions()
export const storage = firebase.storage()
export const firestore = firebase.firestore()
export const StoreDB = firebase.firestore()
