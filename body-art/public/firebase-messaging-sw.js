importScripts('https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js');

firebase.initializeApp({
    apiKey: "AIzaSyBkU8BBA1lbInAKjJMzaDbwU9uoliRW7Bo",
    authDomain: "bodyart-ad0de.firebaseapp.com",
    projectId: "bodyart-ad0de",
    storageBucket: "bodyart-ad0de.appspot.com",
    messagingSenderId: "417686595258",
    appId: "1:417686595258:web:d187b8104c514191e54483",
    measurementId: "G-PZVGJL3W69"
  });

const messaging = firebase.messaging();