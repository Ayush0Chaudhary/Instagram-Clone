import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import { getStorage, ref } from "firebase/storage";
import {
  getFirestore,
  collection,
  doc,
  setDoc,
  addDoc,
  getDoc,
  onSnapshot,
  getDocs,
} from "firebase/firestore";
import { setInterests, setName, urlArray } from "../../pages/main";
import { async } from "@firebase/util";
import { onAuthStateChanged } from "firebase/auth";
import { dataf } from "../../pages/main";
import { setSrc } from "../../components/post";

const app = firebase.initializeApp({
  apiKey: "AIzaSyDRgzsTypd6EUesHgjSXm-2UW6AJ-UTpMU",
  authDomain: "casebook-aa4a8.firebaseapp.com",
  projectId: "casebook-aa4a8",
  storageBucket: "casebook-aa4a8.appspot.com",
  messagingSenderId: "23928511052",
  appId: "1:23928511052:web:3fd51187bf8dbffcddb2e9",
  measurementId: "G-4FZ270V1NP",
});

// Get a reference to the storage service, which is used to create references in your storage bucket
export const storage = getStorage(app);
// Create a storage reference from our storage service
// export const storageRef = ref(storage);
export const auth = app.auth();
export const db = getFirestore(app);

// export const storageRef = app.storage().ref();
export default { app };
let uid;
const logIn = async (email, password) => {
  auth
    .signInWithEmailAndPassword(email, password)
    .then((res) => {
      uid = res.user.uid;
      getUserInterests();
    })
    .catch((error) => {
      if (
        error.toString().slice(0, 108) ==
        "FirebaseError: Firebase: The password is invalid or the user does not have a password. (auth/wrong-password)"
      ) {
        alert("Wrong password");
      } else if (
        error.toString().slice(0, 83) ==
        "FirebaseError: Firebase: The email address is badly formatted. (auth/invalid-email)"
      ) {
        alert("Invalid email id");
      } else if (
        error.toString().slice(0, 136) ==
        "FirebaseError: Firebase: There is no user record corresponding to this identifier. The user may have been deleted. (auth/user-not-found)"
      ) {
        alert("No user exists with given email id");
      } else {
        alert("Error");
        console.log(error);
      }
    });
};

async function signUp(email, password, username, interests) {
  auth.createUserWithEmailAndPassword(email, password).then((res) => {
    uid = res.user.uid;
    console.log(uid);
    try {
      const userRef = doc(db, "data", uid);
      setDoc(userRef, {
        Name: username,
        Email: email,
        Interests: interests,
      });
    } catch (error) {
      console.log(error);
      alert("Error");
    }
  });
}

async function UploadPost(url2, uid2, username2, interest){
  console.log(interest);

  interest.map((intert) => {
    const collectionRef = collection(db, intert) 
    addDoc(collectionRef , {
      URL: url2,
      UID: uid2,
      USERNAME: username2,
    }).then((u)=>{console.log(u);}).catch((e)=>{console.log(e);}); 
  })
}

// const dataf = [];
 function fetchPost(interest){
  interest.map(async(int)  =>{
    const collectionReff = collection(db , int);
    
    // const unsub = onSnapshot(db, collectionReff, (doc))
    const querySnapshot = await getDocs(collectionReff);
    querySnapshot.forEach((doc)=>{
      // console.log(doc.id , " =>" , doc.data());
      dataf.push(doc.data())
      urlArray.push(doc.data().URL);  
    });
    
  })

}


async function getUserInterests() {
  const userdoc = await getDoc(doc(db, "data", uid));
  if (userdoc.exists()) {
    // setInterests("data", userdoc.data().Interests);
    setInterests(userdoc.data().Interests);
    return userdoc.data().Interests;
  } else {
    alert("Error");
    return [];
  }
}

async function getUserName(uid1) {
  const userdoc = await getDoc(doc(db, "data", uid1));
  if (userdoc.exists()) {
    setName(userdoc.data().Name);
    return [];
  } else {
    alert("error");
    return [];
  }
}

const logOut = async () => {
  try {
    await auth.signOut();
  } catch (e) {
    console.log(e);
    alert("error");
  }
};

// function UploadPost(folderName) {
//   console.log(folderName);
//   const imageRef = ref(storage, folderName);
//   if (image !== null) {
//     uploadBytes(imageRef, image).then((snap) => {
//       alert("Uploaded");

//       //extracting the url of the image

//       getDownloadURL(ref(storage, folderName))
//         .then((url) => {
//           console.log(url);
//           setimageUrl(url);
//           console.log(url);
//           //extracting the time of update of the post
//           setvisible("none");
//           getMetadata(ref(storage, folderName))
//             .then((metadata) => {
//               settimeOfUpload(metadata.timeCreated);
//               console.log(timeOfUpload);
//             })
//             .catch((error) => {
//               console.log(error);
//             });
//         })
//         .catch((error) => {
//           console.log(error);
//         });
//     });
//   }
// }

function getPosts() {
  //how to return?
  //along with posts, comments also need to be returned
  //  /data/h1P8wFjsQcTRfICKxMqCHSFsVmp2/Posts -> get all docs
  // url_start_docid
  // get_user_interests
  // go into doc of each interest
  //    get all collections
  //    make url of each and append to an array
}

export { logIn, logOut, signUp, getUserInterests, uid, getUserName, UploadPost, fetchPost, dataf };

const url_start =
  "https://firebasestorage.googleapis.com/v0/b/casebook-aa4a8.appspot.com/o/";
