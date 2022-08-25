
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBRgP4Ry3LkCHMQZThGIMiq5EH3clRLHDg",
    authDomain: "chat-react-app-3e103.firebaseapp.com",
    projectId: "chat-react-app-3e103",
    storageBucket: "chat-react-app-3e103.appspot.com",
    messagingSenderId: "351512969784",
    appId: "1:351512969784:web:f4ff457958c24a3c36dccd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default getFirestore();