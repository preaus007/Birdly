// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getAuth } from 'firebase/auth'
// Your web app's Firebase configuration
const firebaseConfig =
{

apiKey: "AIzaSyAXe2oY51fNtMkkG92m0GvAaQtHo6vEdwM",
authDomain: "birdly-83721.firebaseapp.com",
projectId: "birdly-83721",
storageBucket: "birdly-83721.appspot.com",
messagingSenderId: "61553833888",
appId: "1:61553833888:web:175fad1ff620844752d6c5"

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
