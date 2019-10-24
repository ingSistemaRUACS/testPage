
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
        resolve(null)
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
        const data = { carnet: user.carnet, section: user.section }
        data.verify = true
        try {
          db.ref(`users/${user.id}`).update(data)
          db.ref(`menssage/validuser/${user.id}`).remove()
        } catch (error) {
          resolve(false)
        } finally {
          resolve(true)
        }
      })
    })
  }
}
