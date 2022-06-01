import React from "react";
import PostProps from "../../types/postPropType";
import Button from "../Button";
import Comment from "../comment";
import { useState } from "react";
import InputField from "../InputField";
import "./Post.css";
import { urlArray } from "../../pages/main";

let setSrc:any , setCaption;

const Post: React.FC<PostProps> = (props: PostProps) => {
    const {id} = props;
    let commentsFetched = ["comment-1-test"]; {/* array containing all comments of a post. Taken for test purpose, iske alawa kuch or bhi ho sakta h */}
    let commentComponents = commentsFetched.map((comment)=>{
        return(
            // TODO: pass comment props from comment object
            <Comment comment="Test-comment" commentator="Test-commentator"></Comment>
        )
    })
    const [showComments, setshowComments] = useState("none");
    const [src, setsrc] = useState();
    const [caption, setcaption] = useState("Default Caption");
    setSrc = setsrc;
    setCaption = setcaption;
    return(
        <div id={id} className="Post">
            {/* TODO fetch data and set */}
            <img src={src} alt="Post Pic" />
            <div id="post-caption">{caption}</div>
            {/* 3 buttons in a horizontal list */}
            <div id="buttons" className="buttons">
                <div className="button">
                <Button onClick={()=>{
                    // 1. Fetch comments
                    setshowComments(showComments === "none" ? "block" : "none"); //will toggle display of comments div
                }} text="Comments"></Button></div>
                <div className="button"><Button onClick={()=>{
                    // increase like count, decrease dislike count if user had disliked post earlier
                }} text="Like"></Button></div>
                {/* like count */}
                <div className="button"><Button onClick={()=>{
                    // increase dislike count, decrease dislike count if user had liked post earlier
                }} text="Dislike"></Button></div>
                {/* dislike count */}
            </div>
            <div id="comments-section" className="comments-section" style={{"display":showComments}}>
                {/* TODO */}
                <div className="comments">
                    {commentComponents}
                </div>
                
                    <div id="new-comment">
                        <InputField type="text" id="" label="" class="comment-input"></InputField>
                        <Button onClick={()=>{}} text="Post Comment"></Button>
                    </div>
    
            </div>
        </div>
    )
}

export default Post;
export {setSrc, setCaption}