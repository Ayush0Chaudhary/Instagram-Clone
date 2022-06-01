import React from "react";
import useFetch from "../../hooks/AnimalFetch";
import MainNavProps from "../../types/mainNavPropType";
import { Navigate, useNavigate } from "react-router-dom";
import { useState } from "react";
// import 'src\components\mainnav\mainNav.css' 
import '../App.css'
import { logOut } from "../../services/firebase/firebase";

const MainNav: React.FC<MainNavProps> = (props: MainNavProps) =>{
    const {userName, pictureURL} = props;
    const navigate = useNavigate();
    return(
        <div>
            <nav>
                <h2>CaseBook</h2>
                <h4 className='userNameHead'>{userName}</h4>
                <img id='headerImage' src={pictureURL} width="99.03"/>
                <button className='button' onClick={async()=>{await logOut();navigate("/")}}>SignOut</button>
            </nav>
        </div>
    );
}

export default MainNav;