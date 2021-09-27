import * as firebase from 'firebase';
import "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyBcN4LicnMminBcjQIM1ZrqvDcLHTyKrgY",
    authDomain: "rnfirebase-3c8b5.firebaseapp.com",
    projectId: "rnfirebase-3c8b5",
    storageBucket: "rnfirebase-3c8b5.appspot.com",
    messagingSenderId: "834721518762",
    appId: "1:834721518762:web:3216efb761c17dfc42ecd3"
      
    };

firebase.initializeApp(firebaseConfig);
export default firebase;