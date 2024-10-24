import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCr059o34u23xCjfd43_tTkI-p8ZgAQA5s",
    authDomain: "chat-app-9ee18.firebaseapp.com",
    projectId: "chat-app-9ee18",
    storageBucket: "chat-app-9ee18.appspot.com",
    messagingSenderId: "835294602584",
    appId: "1:835294602584:web:e69ca46b9aa5528973b12d"
  };
  
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };

// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyCr059o34u23xCjfd43_tTkI-p8ZgAQA5s",
//   authDomain: "chat-app-9ee18.firebaseapp.com",
//   projectId: "chat-app-9ee18",
//   storageBucket: "chat-app-9ee18.appspot.com",
//   messagingSenderId: "835294602584",
//   appId: "1:835294602584:web:e69ca46b9aa5528973b12d"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);