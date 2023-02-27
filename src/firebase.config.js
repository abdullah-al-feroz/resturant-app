import { getApp, getApps, initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getStorage} from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyCruoAZFdooIZdpE6gQSDLYhtU2GtkwnyU",
    authDomain: "resturentapp-5a826.firebaseapp.com",
    databaseURL: "https://resturentapp-5a826-default-rtdb.firebaseio.com",
    projectId: "resturentapp-5a826",
    storageBucket: "resturentapp-5a826.appspot.com",
    messagingSenderId: "410408977461",
    appId: "1:410408977461:web:2093f3fa42a8f742065d7c"
  };

  const app = getApps.length > 0? getApp() : initializeApp(firebaseConfig);
  const firestore = getFirestore(app)
  const storage = getStorage(app)

  export { app, firestore, storage};