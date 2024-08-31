// src/fireBase/firebaseConfig.js

import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAIvGdevSRc5aPzl7pqzsLDLqJe8jA9v5o",
    authDomain: "prosty-timer.firebaseapp.com",
    projectId: "prosty-timer",
    storageBucket: "prosty-timer.appspot.com",
    messagingSenderId: "816671083317",
    appId: "1:816671083317:web:94314177bcf75941c55a7c",
    measurementId: "G-BE96C1JSRR"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };