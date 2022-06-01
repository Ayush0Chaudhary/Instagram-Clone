import React, { useContext, useEffect, useState } from 'react';
import { auth } from '../services/firebase/firebase';
import firebase from 'firebase/app'



export const AuthContext = React.createContext();

// export function useAuth(){
//     return useContext(AuthContext);
// }


export function AuthProvider({children}){


    const [currentUser,  setcurrentUser] = useState(null);


    // function signup(email, password) {
    //     return auth.createUserWithEmailAndPassword(email, password);
    // }

    

    useEffect(()=>{
        // const unsubscribe = auth.onAuthStateChanged(user => {
        //     setcurrentUser(user) });


        auth.onAuthStateChanged(setcurrentUser);
            // return unsubscribe;
    }, []);

    


    // const value =  { currentUser, signup};
    return(
        <AuthContext.Provider  value = {currentUser}>

            {children}
        </AuthContext.Provider>
    )
}