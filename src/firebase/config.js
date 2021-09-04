import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDXFZ4LozKLhoIHCy6r3E0iMfuGfbhCHnQ",
    authDomain: "udemy-vue-jc.firebaseapp.com",
    projectId: "udemy-vue-jc",
    storageBucket: "udemy-vue-jc.appspot.com",
    messagingSenderId: "51256941876",
    appId: "1:51256941876:web:4b4a727ca15f6284b99961"
  };

  //init firebase
  firebase.initializeApp(firebaseConfig)

  const projectAuth = firebase.auth()
  const projectFirestore = firebase.firestore()
  const timestamp = firebase.firestore.FieldValue.serverTimestamp

  export {projectFirestore, timestamp, projectAuth}

