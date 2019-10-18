
import { db } from '~/plugins/firebase'

export default class Users {
  ListUsersVerify () {
    return new Promise((resolve, reject) => {
      db.ref('menssage/validuser').on('value', (e) => {
        const List = e.val()
        if (List) {
          const max = Object.keys(List).length
          const ListUser = []
          let count = 0
          for (const id in List) {
            db.ref(`profile/student/${id}`).on('value', (e) => {
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

  ValidUsers (listuser) {
    listuser.forEach((user) => {
      const data = { carnet: user.carnet, section: user.section }
      data.verify = true
      db.ref(`profile/student/${user.id}`).update(data)
      db.ref(`menssage/validuser/${user.id}`).remove()
    })
  }
}
