import firebase from "firebase/app";
import "firebase/firestore";

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyAHCnlYgo-2gSpJcymeLps0gquWWm1ewBg",
  authDomain: "notes-fa3d8.firebaseapp.com",
  projectId: "notes-fa3d8",
  storageBucket: "notes-fa3d8.appspot.com",
  messagingSenderId: "639935524061",
  appId: "1:639935524061:web:e7ed1f7889caf029d33f34"
};

// try {
//   // Initialize other services on firebase instance
//   firebase.firestore(); // <- needed if using firestore
// } catch (err) {}
firebase.initializeApp(firebaseConfig);

export default firebase;
