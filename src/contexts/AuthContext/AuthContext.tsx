import firebase from "firebase/compat";
import { auth, db } from "../../firebase/firebase";
import { iAuth, iAuthContext } from "./types";
import { doc, serverTimestamp, setDoc } from "firebase/firestore";
import { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";

export const AuthContext = createContext({} as iAuthContext);

export const AuthContextProvider = ({ children }: iAuth) => {
  const [loading, setLoading] = useState(false);
  const [currentUser, setCurrentUser] = useState<firebase.User | any>({});

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user: any) => {
      setCurrentUser(user);
      localStorage.setItem("@userUID", user?.uid);
    });

    return () => {
      unsub();
    };
  }, []);

  const handleSubmitAuthLogin = async (data: any) => {
    try {
      await signInWithEmailAndPassword(auth, data.email, data.password);
      setLoading(true);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmitAuthRegister = async (data: any) => {
    const displayName = data.name;
    const email = data.email;

    try {
      const res = createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );
      await updateProfile((await res).user, {
        displayName,
      });
      await setDoc(doc(db, "users", (await res).user.uid), {
        uid: (await res).user.uid,
        displayName,
        email,
        lastSeen: serverTimestamp(),
      });
      await setDoc(doc(db, "userChats", (await res).user.uid), {});
      setLoading(true);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthContext.Provider
      value={{ handleSubmitAuthRegister, handleSubmitAuthLogin, currentUser }}
    >
      {children}
    </AuthContext.Provider>
  );
};
