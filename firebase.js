import { initializeApp } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-storage.js";

const firebaseConfig = {
  apiKey: "AIzaSyDOIS_A9OpC83N5xRnw_CMlw8gYUum0mZI",
  authDomain: "image-upload-ca219.firebaseapp.com",
  projectId: "image-upload-ca219",
  storageBucket: "image-upload-ca219.appspot.com",
  messagingSenderId: "328974687707",
  appId: "1:328974687707:web:66dcfa1d55d0801de41bfe",
};

export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export const db = getFirestore(app);
