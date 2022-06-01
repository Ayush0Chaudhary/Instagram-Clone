import { render } from "@testing-library/react";
import React, { useState } from "react";
import { LoginPageProps } from "../../types/loginPropType";
import { LoginPageState } from "../../types/loginStateType";
import InputField from "../../components/InputField";
import Button from "../../components/Button";
import "../App.css";
import Nav from "../../components/authnav/Nav";
import { auth } from "../../services/firebase/firebase";
import { useNavigate } from "react-router-dom";
import { logIn } from "../../services/firebase/firebase";

const LoginPage: React.FC = () => {
  const [loginEmail, setloginEmail] = useState("");
  const [loginPassword, setloginPassword] = useState("");


  const navigate = useNavigate();

  // function login() {
  //   console.log(
  //     (document.getElementById("login-email") as HTMLInputElement).value
  //   );
  //   console.log(
  //     (document.getElementById("login-password") as HTMLInputElement).value
  //   );

  //   setloginEmail(
  //     (document.getElementById("login-email") as HTMLInputElement).value
  //   );
  //   setloginPassword(
  //     (document.getElementById("login-password") as HTMLInputElement).value
  //   );

  //   auth
  //     .signInWithEmailAndPassword(loginEmail, loginPassword)
  //     .then((userCredential) => {
  //       console.log(userCredential.user);

  //       let user = userCredential.user;
  //       console.log(user?.uid);
  //       navigate("/home");
  //     })
  //     .catch((error) => {
  //       console.log(error);

  //       if (
  //         error.toString().slice(0, 83) ==
  //         "FirebaseError: Firebase: The email address is badly formatted. (auth/invalid-email)"
  //       ) {
  //         alert("Invalid email id");
  //       } else if (
  //         error.toString().slice(0, 86) ==
  //         "FirebaseError: Firebase: Password should be at least 6 characters (auth/weak-password)"
  //       ) {
  //         alert("Password should be of min length 6");
  //       } else if (
  //         error.toString().slice(0, 108) ==
  //         "FirebaseError: Firebase: The email address is already in use by another account. (auth/email-already-in-use)"
  //       ) {
  //         alert("User already exists with same email");
  //       } else {
  //         alert("Error has occurred... Contact Mono or Panda, mp Mono only");
  //         console.log(error);
  //       }
  //     });
  // }

  return (
    // nav bar

    <div className="login-page">
      <Nav />
      <input 
        id="login-email" 
        type="email" 
        placeholder="Email" 
        className="input" 
        onChange={(event)=>{setloginEmail(event.target.value)}}/>
      <input
        id="login-password"
        type="password"
        placeholder="Password"
        className="input"
        onChange={(event)=>{setloginPassword(event.target.value)}}
      />
      <Button onClick={async() => {await logIn(loginEmail, loginPassword); navigate("/home")}} text="Login" />
    </div>
  );
};

export default LoginPage;
