// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/auth';
import 'firebase/compat';
import 'firebase/database';
// import {getAnalytics} from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyA2jGqJlLRaRFWVEeS3TTs3_dcEGU1TCtM',
  authDomain: 'allodoc-test.firebaseapp.com',
  projectId: 'allodoc-test',
  storageBucket: 'allodoc-test.appspot.com',
  messagingSenderId: '299324281005',
  appId: '1:299324281005:web:8f4fe73bcd195ffddbf624',
  measurementId: 'G-10ZCKYBVW4',
};

firebase.initializeApp(firebaseConfig);
// Initialize Firebase
export default firebase;
// const analytics = getAnalytics(app);
