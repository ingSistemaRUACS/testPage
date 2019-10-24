import faker from 'faker'
import { db } from '~/plugins/firebase'

export default class bod {
  componentToHex (c) {
    const hex = c.toString(16)
    return hex.length == 1 ? '0' + hex : hex
  }

  rgbToHex (r, g, b) {
    return this.componentToHex(r) + this.componentToHex(g) + this.componentToHex(b)
  }

  UserName () {
    return faker.name.findName()
  }

  img (letra) {
    const color = this.rgbToHex(Math.floor(Math.random() * 250), Math.floor(Math.random() * 250), Math.floor(Math.random() * 250))
    return `http://ipsumimage.appspot.com/640x640,${color}?l=${letra}`
  }

  key () {
    let clave = ''
    const length = 28
    for (let i = 0; i < length; i++) {
      const code = 0
      const opcion = Math.floor(Math.random() * 4)
      if (opcion === 0) {
        code = Math.floor(Math.random() * 9) + 48
      } else if (opcion === 1) {
        code = Math.floor(Math.random() * 25) + 65
      } else {
        code = Math.floor(Math.random() * 25) + 97
      }
      clave = clave + String.fromCharCode(code)
    }

    return clave
  }

  createUser () {
    const user = {}
    user.key = this.key()
    user.name = this.UserName()
    user.photo = this.img(user.name.charAt(0))
    user.carnet = `2015-00${Math.floor(Math.random() * 90) + 10}N`
    user.section = 'prueba'
    return user
  }

  run () {
    for (let i = 0; i < 4; i++) {
      setTimeout(() => {
        this.UserSet()
      }, Math.floor(Math.random() * 1000))
    }
  }

  async UserSet () {
    const user = this.createUser()
    const date = Date.now()
    await db.ref(`bod/user/${user.key}`).set({ date })
    await db.ref(`users/${user.key}`).set({ section: user.section, carnet: user.carnet })
    await db.ref(`menssage/validuser/${user.key}`).set({ name: user.name, photo: user.photo })
  }

  Delete () {
    return new Promise((resolve, reject) => {
      db.ref('bod/user').on('value', (e) => {
        const List = e.val()
        if (List) {
          const max = Object.keys(List).length
          let count = 0
          for (const id in List) {
            const key = id
            if (key) {
              db.ref(`menssage/validuser/${key}`).remove()
              db.ref(`users/${key}`).remove()
              db.ref(`bod/user/${key}`).remove()
            }
            count++
            if (count >= max) {
              resolve(true)
            }
          }
        }
      })
    })
  }
}
