import React from "react";
import Sidebar from "../../components/Sidebar/Sidebar";

import "./Settings.css";
import { images } from "../../constants/index";

const Settings = () => {
  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitles">
          <span className="settingsUpdateTitle">Update your account</span>
          <span className="settingsDeleteTitle">Delete your account</span>
        </div>
        <form action="" className="settingsForm">
          <label>Profile Picture</label>
          <div className="settingsPP">
            <img src={images.background2} alt="bc" />
            <label htmlFor="fileInput">
              <i className="settingsPPIcon far fa-user-circle"></i>
            </label>
            <input type="file" id="fileInput"  style={{ display: "none" }}/>
          </div>
          <label>Username</label>
          <input type="text" placeholder="Athu" />
          <label>Email</label>
          <input type="email" placeholder="athu@gmail.com" />
          <label>Password</label>
          <input type="password" />
          <button className="settingsSubmit">Submit</button>
        </form>
      </div>
      <div className="sidebar">
        <Sidebar />
      </div>
    </div>
  );
};

export default Settings;
