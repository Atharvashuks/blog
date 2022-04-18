import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Header from "../../container/Header/Header";
import Posts from "../Posts/Posts";
import Sidebar from "../../components/Sidebar/Sidebar";
import "./Home.css";

import { getPosts } from "../../reduxState/actions/posts.action";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  },[dispatch]);

  const posts = useSelector((state) => state.postReducer);

  console.log(posts);

  return (
    <>
      <Header />
      <div className="home">
        <Posts posts={posts} />
        <Sidebar />
      </div>
    </>
  );
};

export default Home;
