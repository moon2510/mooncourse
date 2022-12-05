// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage} from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAZ3nu0c6WtwJmp0jUI2TE1LBVb-J_MDfA",
  authDomain: "moon-course.firebaseapp.com",
  projectId: "moon-course",
  storageBucket: "moon-course.appspot.com",
  messagingSenderId: "227096023477",
  appId: "1:227096023477:web:31cb5d01d6c09d3ae309fc",
  measurementId: "G-BMYMLZ4NM0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export {storage};