//Complete the necessary code in this file

// import useState
import React, { useState } from "react";
// import React from "react";
import Post from "./Post";
import "./Posts.css";
// import data 
import dummy-data from "./dummy-data.";

const PostsPage = () => {
  // set up state for your data
  const [data] = useState(dummy-data);
    console.log(data);
    
  return (
    <div className="posts-container-wrapper">
      {/* map through data here to return a Post and pass data as props to Post */}
    </div>
  );
};

export default PostsPage;
