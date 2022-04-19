import React from "react";
import { useSelector } from "react-redux";

import "./Post.scss";
import { images } from "../../../constants";
import { Link } from "react-router-dom";

const Post = ({ post }) => {
  return (
    <div className="app__post">
      {post.photo && (
        <img src={post.photo} className="app__post-img" alt="post" />
      )}
      <div className="app__post-info">
        <div className="app__post-info-categories">
          {post?.categories?.map((category) => (
            <span className="app__post-info-categorie">{category.name}</span>
          ))}
        </div>
        {/* <Link></Link> */}
        <span className="app__post-title">{post.title}</span>
        <hr />
        <span className="app__post-date">
          {new Date(post.createdAt).toDateString()}
        </span>
      </div>
      <p className="app__post-discription">{post.desc}</p>
    </div>
  );
};

export default Post;
