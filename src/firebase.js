import firebase from 'firebase/app'
import 'firebase/firestore'
var firebaseConfig = {
    apiKey: "AIzaSyDuhUKnfmTzIV4JNN8B8BktydcKyWUZSIE",
    authDomain: "tucsoproject.firebaseapp.com",
    databaseURL: "https://tucsoproject.firebaseio.com",
    projectId: "tucsoproject",
    storageBucket: "tucsoproject.appspot.com",
    messagingSenderId: "886797106104",
    appId: "1:886797106104:web:62e00b07fd512e5515ed4d"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase