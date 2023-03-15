// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getFireStore } from "firebase/firestore";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB9riVkkjwnn8-7TbIQ2WWbkjiaecgzS2Y",
  authDomain: "realtor-clone-ad2c3.firebaseapp.com",
  projectId: "realtor-clone-ad2c3",
  storageBucket: "realtor-clone-ad2c3.appspot.com",
  messagingSenderId: "396156650007",
  appId: "1:396156650007:web:dddd2cf1eda0db06fad252",
};

// Initialize Firebase
initializeApp(firebaseConfig);
// export const db = getFireStore();
export const db = getFirestore();
