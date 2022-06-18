import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDIgPlsBiIpFl21F53KX3iMYBwPykOrJv0",
  authDomain: "gaming-zone-637b7.firebaseapp.com",
  projectId: "gaming-zone-637b7",
  storageBucket: "gaming-zone-637b7.appspot.com",
  messagingSenderId: "512123631675",
  appId: "1:512123631675:web:b294ec2d137d875a58841e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export default db;