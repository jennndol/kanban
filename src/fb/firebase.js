import Firebase from 'firebase'

const config = {
  apiKey: 'AIzaSyAZDct8zsXkFEYkt6LtxTHNHVllK_ap_1A',
  authDomain: 'learning-5708d.firebaseapp.com',
  databaseURL: 'https://learning-5708d.firebaseio.com',
  projectId: 'learning-5708d',
  storageBucket: 'learning-5708d.appspot.com',
  messagingSenderId: '303656755232'
}

const app = Firebase.initializeApp(config)
const firebase = app.database()
export default firebase
