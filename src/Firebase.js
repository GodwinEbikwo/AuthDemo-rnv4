import firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCdIgkq51xCK8nr6UPC6lGIkOl7VJactxo",
  authDomain: "bandup-test.firebaseapp.com",
  databaseURL: "https://bandup-test.firebaseio.com",
  projectId: "bandup-test",
  storageBucket: "bandup-test.appspot.com",
  messagingSenderId: "334430483983",
  appId: "1:334430483983:web:d4c11316b63463d544d57a",
};
// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const firestore = firebase.firestore(app);

export const auth = firebase.auth(app);

export default app;
