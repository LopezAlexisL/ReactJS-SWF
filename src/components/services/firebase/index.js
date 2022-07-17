import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBo7Kq7wyFN8k5rpIH7hG1D6peMx5-O0XI",
  authDomain: "ecomercereactjscoderhouse31865.firebaseapp.com",
  projectId: "ecomercereactjscoderhouse31865",
  storageBucket: "ecomercereactjscoderhouse31865.appspot.com",
  messagingSenderId: "834204618623",
  appId: "1:834204618623:web:41ebacb45965996fd3944a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export default db

