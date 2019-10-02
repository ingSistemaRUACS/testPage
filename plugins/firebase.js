import firebase from 'firebase/app'

let app = null
if (!firebase.apps.length) {
  const config = {
    apiKey: 'AIzaSyAQQqJb4BHTl2ZhW-zalF4Az_84RfCsvZk',
    authDomain: 'paguniruacs.firebaseapp.com',
    databaseURL: 'https://paguniruacs.firebaseio.com',
    projectId: 'paguniruacs',
    storageBucket: '',
    messagingSenderId: '951861054805',
    appId: '1:951861054805:web:145377b2dd6529861033dc'
  }

  app = firebase.initializeApp(config)
}

export const db = app.database()
