// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDTYJTkO4j6iO4LsXU8MV2mk3QZ_VOnH-U",
  authDomain: "eve-gurumis.firebaseapp.com",
  projectId: "eve-gurumis",
  storageBucket: "eve-gurumis.firebasestorage.app",
  messagingSenderId: "1064047402912",
  appId: "1:1064047402912:web:2e4958f8428b55b78a4ec5",
  measurementId: "G-HN64TEHN93"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
let analytics;
if (typeof window !== 'undefined') {
  analytics = getAnalytics(app);
}

export { analytics };
export const db = getFirestore(app);

