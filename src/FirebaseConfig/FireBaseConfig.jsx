// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics'
import { browserSessionPersistence, initializeAuth, browserPopupRedirectResolver } from 'firebase/auth';
import { getDatabase } from "firebase/database";
const firebaseConfig = {
    apiKey: "AIzaSyBvHpUbuva0Igu4pj_8l_1RjoKCgpgd4w8",
    authDomain: "files-stroage-app.firebaseapp.com",
    projectId: "files-stroage-app",
    storageBucket: "files-stroage-app.appspot.com",
    messagingSenderId: "439361129494",
    appId: "1:439361129494:web:d62577477c863310353937",
    measurementId: "G-MJ46F9HW72"
};



export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const db = getDatabase(app)
export const auth = initializeAuth(app, {
    persistence: browserSessionPersistence,
    popupRedirectResolver: browserPopupRedirectResolver,
});