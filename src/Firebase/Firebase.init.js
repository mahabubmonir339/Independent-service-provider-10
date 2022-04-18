import { initializeApp } from "firebase/app";
import firebaseConfig from "./Firebase.con";
const initializeAuthentication = () => {
    initializeApp(firebaseConfig);
}
export default initializeAuthentication;