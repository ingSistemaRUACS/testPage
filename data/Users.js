
import { db } from '~/plugins/firebase'

export default class Users {
  UsersVerify () {
    return new Promise((resolve, reject) => {
      db.ref('menssage/validuser').on('value', (e) => {
        const List = e.val()
        if (List) {
          const max = Object.keys(List).length
          const ListUser = []
          let count = 0
          for (const id in List) {
            db.ref(`users/${id}`).on('value', (e) => {
              const user = e.val()
              user.id = id
              user.name = List[id].name
              user.photo = List[id].photo
              ListUser.push(user)
              count++

              if (count >= max) {
                resolve(ListUser)
              }
            })
          }
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
    return new Promise((resolve, reject) => {
      listuser.forEach((user) => {
        const id = user.id
        delete user.id
        user.verify = true
        db.ref(`users/${id}`).update(user, function (err) {
          if (err) {
            reject('error no se verifico el usuario')
          } else {
            db.ref(`menssage/validuser/${id}`).remove()
            resolve(true)
          }
        })
      })
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
