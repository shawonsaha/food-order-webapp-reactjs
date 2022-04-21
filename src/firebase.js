import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC8yiakGJNtDWAQIgEoAiFUkT-UM__xTig",
  authDomain: "cse470-c1614.firebaseapp.com",
  databaseURL:
    "https://cse470-c1614-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "cse470-c1614",
  storageBucket: "cse470-c1614.appspot.com",
  messagingSenderId: "684159210902",
  appId: "1:684159210902:web:8b2694d1dd07ece96d79b7",
};

const Firebase = firebase.initializeApp(firebaseConfig);

const db = Firebase.firestore();

export { db };
export default firebase;
