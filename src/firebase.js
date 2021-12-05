import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut} from "firebase/auth"
import { useState, useEffect} from "react";

const firebaseConfig = {
    apiKey: "AIzaSyBrfIDg-IehIT7W8yID0Pk1ASdAbyYfOhs",
    authDomain: "authentication-app-e8965.firebaseapp.com",
    projectId: "authentication-app-e8965",
    storageBucket: "authentication-app-e8965.appspot.com",
    messagingSenderId: "452450030378",
    appId: "1:452450030378:web:61d8be74f72f5e7c104453",
    measurementId: "G-5QRP3Q6Z77"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth();


  export function signup(email, password) {
      createUserWithEmailAndPassword(auth, email, password);
  }

  export function login(email, password) {
    signInWithEmailAndPassword(auth, email, password);
}

  export function logout() {
      return signOut(auth);
  }

  export function useAuth() {
      const [currentUser, setCurrentUser] = useState();

      useEffect(() => {
          const unsubscribe = onAuthStateChanged(auth, user => {setCurrentUser(user)})
          return unsubscribe
      }, [])

      return currentUser;
  }


