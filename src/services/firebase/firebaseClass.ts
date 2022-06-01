import { ref, uploadBytes } from "firebase/storage";
import React from "react";
import { storage } from "./firebase";


class FirebaseServices extends React.Component{


UplaodPost = (folderName : string , image: any) =>{

    console.log(folderName)
    const imageRef = ref(storage, folderName );
    if(image !== null){
        uploadBytes(imageRef, image);
        alert("Uploaded");
    }
}


}

export default FirebaseServices;