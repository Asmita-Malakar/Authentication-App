import logo from './logo.svg';
import './App.css';
import  {signup, useAuth, logout, login} from "./firebase";
import { useRef, useState } from 'react';
import {Form, Card, Button, Alert, Tex} from "react-bootstrap"

function App() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const [ loading, setLoading ] = useState(false);
  const [error, setError] = useState("")
  const currentUser = useAuth();

  async function handleSignUp() {

    setLoading(true)
    try {
      await signup(emailRef.current.value, passwordRef.current.value)

      // console.log(emailRef.current.value)
    } 
    catch {
      setError("Error!!");
      <Alert>{error}</Alert>
    }
    setLoading(false)
  }

  async function handleLogin() {

    setLoading(true)
    try {
      await login(emailRef.current.value, passwordRef.current.value)

      // console.log(emailRef.current.value)
    } 
    catch { //In case user login credentials are incorrect or they can't login successfully
      setError("Error!!");
      <Alert>{error}</Alert> 
    }
    setLoading(false)
  }

   async function handleLogout() { //logging user out
     setLoading(true);
     try {
       await logout();
     } catch {
       alert ('Error')
     }
     setLoading(false);
   }

  return (
  <div className = "main">


    <div className = "LoginText">
      Currently logged in as: {currentUser?.email}
    </div> 
 
      <div className = "holder">
        <input className = "Input" ref = {emailRef} placeholder = "Email"></input>
        <input className = "Input" ref = {passwordRef} type = "password" placeholder = "Password"></input>
    </div>
    <div className = "buttonsGroup">
        <Button className = "Button" disabled = {loading || currentUser != null} onClick = {handleSignUp}>Sign Up</Button>
        <Button className = "Button" disabled = {loading || currentUser != null} onClick = {handleLogin}>Log In</Button>
        <Button className = "Button" disabled = {loading || currentUser == null} onClick = {handleLogout}>LogOut</Button>
      </div>
    </div>
  );
}

export default App;
