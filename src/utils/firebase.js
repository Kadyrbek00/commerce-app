import firebase from "firebase/compat/app"
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyC4SYoXFxuFKFCyyWub9fpJGLdJ8sz-8uU",
    authDomain: "clothe-store-a8367.firebaseapp.com",
    projectId: "clothe-store-a8367",
    storageBucket: "clothe-store-a8367.appspot.com",
    messagingSenderId: "972244555067",
    appId: "1:972244555067:web:de0888162414ddc90e931e",
    measurementId: "G-BRVYXX5GNK"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth }
export default db
