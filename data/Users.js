
import { db } from '~/plugins/firebase'

export default class Users {
  UsersVerify () {
    return new Promise((resolve, reject) => {
      db.ref('menssage/validuser').on('child_added', (data) => {
        if (data) {
          db.ref(`users/${data.key}`).on('value', (e) => {
            const user = e.val()
            const info = data.val()
            user.id = data.key
            user.name = info.name
            user.photo = info.photo
            resolve(user)
          })
        }
      })
    })
  }

  UserRemoveMessage () {
    return new Promise((resolve, reject) => {
      db.ref('menssage/validuser').on('child_removed', (data) => {
        resolve(data.key)
      })
    })
  }

  ValidUsers (listuser) {
    listuser.forEach((user) => {
      const data = { carnet: user.carnet, section: user.section }
      data.verify = true
      db.ref(`users/${user.id}`).update(data)
      db.ref(`menssage/validuser/${user.id}`).remove()
    })
  }

  userKey (list, key) {
    for (let i = 0; i < list.length; i++) {
      if (list[i].id === key) {
        return i
      }
    }
    return -1
  }
}
