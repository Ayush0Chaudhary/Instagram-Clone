import React from "react";
import MainNav from "../../components/mainnav/mainNav";
import { useState } from "react";
import LoginPage from "../Login";
import useFetch from "../../hooks/AnimalFetch";
import { Modal, showModal } from "../../components/modal";
import Button from "../../components/Button";
import { getInterests, reset_interests } from "../../utils/Interest";
import Post, { setSrc } from "../../components/post";
import { onAuthStateChanged } from "firebase/auth";
import {
  auth,
  fetchPost,
  getUserInterests,
  getUserName,
  UploadPost,
} from "../../services/firebase/firebase";

var setName;
let setInterests;
let Name: string;
let uniqueUserId: string;
let dataf: Array<any> = [];
let urlArray: any = [];

const MainPage: React.FC = () => {
  getUid();

  const { data, loading, error } = useFetch(
    "https://zoo-animal-api.herokuapp.com/animals/rand"
  );
  const [userName, setuserName] = useState("username");
  const [image, setImage] = useState(null);
  const [userInterests, setuserInterests] = useState([]);
  const [postComponents, setpostComponents] = useState<any>();

  setInterests = setuserInterests;
  setName = setuserName;

  Name = userName;
  async function getUid() {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        uniqueUserId = user?.uid;
        console.log(uniqueUserId);
        getUserName(uniqueUserId);
      } else {
        console.log("Something went wrong!");
      }
    });
  }

  function testFunction() {
    console.log(uniqueUserId);
    fetchPost(userInterests);
    console.log(dataf);
    let posts = ["xfvd", "sadf"];
    setTimeout(() => {
      let postComp;
      postComp = dataf.map((post : any) => {
        return (
          // TODO: get post id from post only
          <Post id={post.UID} url={post.URL} capson={post.CAPTION} username={post.USERNAME}></Post>
        );
      });
setpostComponents(postComp)
    }, 5000);

    // setSrc(urlArray[0])
  }

  // let posts = dataf;
  
  // let postComponents = posts.map((post) => {
  //   return (
  //     // TODO: get post id from post only
  //     <Post id="test-1"></Post>

  //   );
  // });
  // let postComponents;
  // let urlll: any;

  // postComponents = posts.map((post) => {
  //   urlll = urlArray[0];
  //   console.log("hh");

  //   return (
  //     // TODO: get post id from post only

  //     <Post id="jbhgbj" capson="CAPTION" username="USERNAME" url={urlll}></Post>
  //   );
  // });

  return userName != "" ? (
    <div>
      <MainNav userName={userName} pictureURL={data!} />
      <Button
        onClick={() => {
          testFunction();
        }}
        text="Show My Timeline"
      ></Button>
      <Button
        onClick={() => {
          reset_interests();
          showModal();
        }}
        text="New Post"
      ></Button>
      <Modal></Modal>
      {postComponents}
    </div>
  ) : (
    <LoginPage />
  );
};

export { urlArray, dataf, MainPage, setName, setInterests, Name, uniqueUserId };
