import React from "react";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import { Navbar } from "./components";
import { Header, Single, Write, Settings, Login, Register,Home } from "./container";

const App = () => {
  const user = false;
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />}/>
        <Route path="/register" exact element={user ? <Home /> : <Register />}/>
        <Route path="/login" exact element={user ? <Home /> :<Login />}/>
        <Route path="/write" exact element={user ? <Write /> : <Register />}/>
        <Route path="/settings" exact element={user ? <Settings /> : <Register />}/>
        <Route path="/post/:postId" exact element={<Single />}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
