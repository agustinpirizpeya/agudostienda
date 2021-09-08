import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA0DirLJzGCzkHbSuQFS1JVYcB1ZXzQFWI",
  authDomain: "coderhouse-ecommerce-1f76e.firebaseapp.com",
  projectId: "coderhouse-ecommerce-1f76e",
  storageBucket: "coderhouse-ecommerce-1f76e.appspot.com",
  messagingSenderId: "75622412975",
  appId: "1:75622412975:web:49c981b80adefd10699a5a",
};

// Initialize Firebase y lo pongo en app
const app = initializeApp(firebaseConfig);

// getData devuelve la conexion con firestore a mi app
export const getData = () => getFirestore(app);
