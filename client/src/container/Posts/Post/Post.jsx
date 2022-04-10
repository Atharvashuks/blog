import React from "react";

import "./Post.scss";
import { images } from "../../../constants";

const Post = () => {
  return (
    <div className="app__post">
      <img src={images.postImg} className="app__post-img" alt="post" />
      <div className="app__post-info">
        <div className="app__post-info-categories">
          <span className="app__post-info-categorie">Music</span>
          <span className="app__post-info-categorie">Life</span>
        </div>
        <span className="app__post-title">Lorem ipsum dolor sit amet</span>
        <hr />
        <span className="app__post-date">1 hour ago</span>
      </div>
      <p className="app__post-discription">
        Lorem ipsum dolor sit amet. Consectetur anim non culpa adipisicing sunt
        duis veniam ad in ad. Sint commodo commodo pariatur voluptate
        exercitation dolore irure elit nulla nulla ullamco exercitation. Labore
        exercitation ullamco ut culpa fugiat. Culpa veniam duis ex sit velit
        irure et ex qui excepteur do do nostrud culpa. Lorem est pariatur do
        quis ad do culpa minim. Est qui velit pariatur minim et officia enim
        sint voluptate cupidatat culpa. Enim non sint nisi non quis deserunt
        pariatur eu eu adipisicing. Lorem ipsum dolor sit amet. Consectetur anim
        non culpa adipisicing sunt duis veniam ad in ad. Sint commodo commodo
        pariatur voluptate exercitation dolore irure elit nulla nulla ullamco
        exercitation. Labore exercitation ullamco ut culpa fugiat. Culpa veniam
        duis ex sit velit irure et ex qui excepteur do do nostrud culpa. Lorem
        est pariatur do quis ad do culpa minim. Est qui velit pariatur minim et
        officia enim sint voluptate cupidatat culpa. Enim non sint nisi non quis
        deserunt pariatur eu eu adipisicing.
      </p>
    </div>
  );
};

export default Post;
