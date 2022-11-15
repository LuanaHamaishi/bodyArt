import { initializeApp } from "firebase/app";
import { getMessaging, getToken, onMessage }  from 'firebase/messaging'
import api from "../api";

const firebaseConfig = {
    apiKey: "AIzaSyBkU8BBA1lbInAKjJMzaDbwU9uoliRW7Bo",
    authDomain: "bodyart-ad0de.firebaseapp.com",
    projectId: "bodyart-ad0de",
    storageBucket: "bodyart-ad0de.appspot.com",
    messagingSenderId: "417686595258",
    appId: "1:417686595258:web:d187b8104c514191e54483",
    measurementId: "G-PZVGJL3W69"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const messaging = getMessaging(app);


function Notification(tipoUsuario, id){
    

    getToken(messaging, { vapidKey: 'BGF3hnAivn1PP4vVqibnMSZR7Osly12wMB1UUoArhwb-uBn1XCagKzOA3OTapAlhFI1roytmy1MbNJYcvYqhtgQ' }).then((currentToken) => {

        if (currentToken) {

            api.patch(`/${tipoUsuario}/atualizar-token/${id}/${currentToken}`)
        } else {
            console.log("Permissão negada para gerar token")
        
    
        }
    }).catch((err) => {
        console.log( "Deu rum, cheque o console!");
        console.log(err)
    });

    onMessage(messaging, (payload) => {
        console.log('Message received. ', payload);
        // ...
    });

}



export default Notification;