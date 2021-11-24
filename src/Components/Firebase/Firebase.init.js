import firebaseConfig from "./Firebase.confiq";
import { initializeApp } from "firebase/app";

const initAuth = () => {
  return initializeApp(firebaseConfig);
};

export default initAuth;
