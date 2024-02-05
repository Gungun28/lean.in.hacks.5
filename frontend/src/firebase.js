import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyC8wX_0Vwq9y6A1entPv0TyVNMWwbOcy2A",
    authDomain: "leanin-c0a56.firebaseapp.com",
    projectId: "leanin-c0a56",
    storageBucket: "leanin-c0a56.appspot.com",
    messagingSenderId: "928766118907",
    appId: "1:928766118907:web:c9389dd6e9007c52d2195e",
    measurementId: "G-MNZV52LEPN"
};


const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export { storage };
