// You will add code to this file
import React, { useState } from "react";
import CommentInput from "./CommentInput";
import Comment from "./Comment";
import "./Comment.css";

const CommentSection = props => {
  // Add state for the comments

  // const [username, setUsername] = useState();
  // console.log(username);
  // const [text, setText] = useState();
  // console.log(text);

  return (
    <div>
      {/* map through the comments data and return the Comment component */}
      <CommentInput />
    </div>
  );
};

export default CommentSection;
