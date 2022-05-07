// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//         apiKey: "AIzaSyC1omMUDtn-HWYvNJWf8QStILlbOKgaAx0",
//         authDomain: "chaldal-warehouse.firebaseapp.com",
//         projectId: "chaldal-warehouse",
//         storageBucket: "chaldal-warehouse.appspot.com",
//         messagingSenderId: "1070662638738",
//         appId: "1:1070662638738:web:62f4d2b1ca219ddd155a4b"
// };
const firebaseConfig = {
        apiKey: process.env.REACT_APP_apiKey,
        authDomain: process.env.REACT_APP_authDomain,
        projectId: process.env.REACT_APP_projectId,
        storageBucket: process.env.REACT_APP_storageBucket,
        messagingSenderId: process.env.REACT_APP_messagingSenderId,
        appId: process.env.REACT_APP_appId
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;