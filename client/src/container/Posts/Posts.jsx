import React from "react";
import Post from "./Post/Post";

import "./Posts.css";

const Posts = ({ posts }) => {
  return !posts.length ? (
    <div>Loading.....</div>
  ) : (
    <div className="app__posts">
      {posts?.map((post, i) => (
        <Post post={post} key={i} />
      ))}
    </div>
  );
};

export default Posts;
