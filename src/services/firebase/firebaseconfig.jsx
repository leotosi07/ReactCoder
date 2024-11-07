import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBid5riXhbptorlBwOQP8I2hdQaPLKeIAU",
    authDomain: "proyectocoderreact-55a20.firebaseapp.com",
    projectId: "proyectocoderreact-55a20",
    storageBucket: "proyectocoderreact-55a20.firebasestorage.app",
    messagingSenderId: "362105525144",
    appId: "1:362105525144:web:0795d9d2c0a42d01ead1ed",
    measurementId: "G-QQGYXL9BK3"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore (app)