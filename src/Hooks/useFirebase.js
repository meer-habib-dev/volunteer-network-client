import initAuth from "../Components/Firebase/Firebase.init";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { useEffect, useState } from "react";
initAuth();
const useFirebase = () => {
  const [user, setUser] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const auth = getAuth();

  // handle Forms
  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleDes = (e) => {
    setDescription(e.target.value);
  };
  const handledate = (e) => {
    setDate(e.target.value);
  };

  const signInUsingGoogle = () => {
    const googleProvider = new GoogleAuthProvider();
    signInWithPopup(auth, googleProvider).then((result) => {
      setUser(result.user);
    });
  };

  const logOut = () => {
    signOut(auth).then(() => {});
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      return () => unsubscribe;
    });
  }, []);
  return {
    user,
    name,
    email,
    description,
    date,
    handleName,
    handledate,
    handleEmail,
    handleDes,
    signInUsingGoogle,
    logOut,
  };
};
export default useFirebase;
