import InputField from "../../components/InputField";
import Button from "../../components/Button";
import "../App.css";
import React, { useState } from "react";
import { auth } from "../../services/firebase/firebase";
import { Link, Navigate, useNavigate } from "react-router-dom";
import Nav from "../../components/authnav/Nav";
import Interest from "../../components/interests";
import allInterests from "../../constants/AllTags";
import {signUp} from "../../services/firebase/firebase";
import {getInterests} from "../../utils/Interest"


let interests = [];
// function changeInterests() {

// }


const SignUpPage: React.FC = () => {
  const [username  , setusername] = useState("");
  const [email, setemail]= useState("");  
  const navigate = useNavigate();
  const [password, setpassword]= useState("");
  const [confirmpassword, setconfirmpassword] = useState("");
  const allTags = allInterests.map((interest)=>{
    return(
      <Interest interest={interest} key={interest}></Interest>
    );
  })



    return (
      <div className="signup-page">
      <Nav />
        <h1>Signup page</h1>
        <input 
        id="signup-username" 
        type="text"
        placeholder="Username" 
        className="input" 
        onChange={(event)=>{setusername(event.target.value);}}/>


        {/* <input type = "text"  placeholder="Username..." onChange={(event) => {setusername(event.target.value)}}></input> */}
        <input 
          id="signup-email" 
          type="email" 
          placeholder="Email"
          className="input"
          onChange={(event) => { setemail(event.target.value)}} />
        <input 
          id="signup-password" 
          placeholder="Password"  
          type="password"
          className="input"
          onChange={(event) => { setpassword(event.target.value)}} />
        <input 
          type ="password" 
          placeholder="Confirm Password" 
          id="signup-password-confirm" 
          className="input"
          onChange={(event) => {setconfirmpassword(event.target.value); if(event.target.value === email ){alert("your password is same!!")}}} />
        <br />Choose Your interests
        <div>
        {allTags.slice(0,5)}
        </div>
        <div>
        {allTags.slice(5,10)}
        </div>
        <br />
        {/* {allInterests.map((interest)=>{
          <Button onClick={()=>{console.log("interest")}} text={interest}></Button>
        })}; */}
        {/* <button onClick={signWithEmailPassword()}>SignUp</button> */}
        {/* <h4>Already have an account?? <Link to = "/login">login</Link></h4> */}
        {/* <InputField 
            id="signup-email"
            type="email"
            label="Email"
            class="input"
            
        />
        <InputField 
 
        
            id="signup-password"
            type="password"
            label="Password"
            class="input"
        /> */}
        {/* <input type={String}  placeholder="Username" className="loginPageBoxes" id = "signUpEmail"></input>
        <input type={'password'}  placeholder="password" className="loginPageBoxes" id = "signUpPassword"></input> */}
       
     
        <Button
                onClick={async()=>{
                  interests = getInterests();
                  // console.log("clicked");
                  if (password != confirmpassword){
                    alert("Passwords are not matching");
                  }
                  else if(interests.length == 0){
                    alert("Please choose atleast one interest")
                  }
                  else{
                    await signUp(email, password, username, interests);
                    navigate("/home");
                  }}
                  }
                text="SignUp"

                
            />
        {/* <button onClick={signWithEmailPassword()}>SignUp</button> */}
        {/* <h4>Already have an account?? <Link to = "/login">login</Link></h4> */}
      </div>
    );
  }
  
export default SignUpPage;