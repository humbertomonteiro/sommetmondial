import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAQikWxM1RUm1x-tVdTFIVgGBUjDKwOGxo",
  authDomain: "sommetmondial-393cd.firebaseapp.com",
  projectId: "sommetmondial-393cd",
  storageBucket: "sommetmondial-393cd.appspot.com",
  messagingSenderId: "411863475275",
  appId: "1:411863475275:web:cfca0133f374cd715f59ce",
  measurementId: "G-9TW5N9F65B",
};

const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);

export { db };
