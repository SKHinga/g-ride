import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCUTzCP7Xo54OP5hz9Ke7KODKbP6i2C13U",
  authDomain: "upload-files-42f20.firebaseapp.com",
  projectId: "upload-files-42f20",
  storageBucket: "upload-files-42f20.appspot.com",
  messagingSenderId: "233107575401",
  appId: "1:233107575401:web:e73c7fd31a4241261388f8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);