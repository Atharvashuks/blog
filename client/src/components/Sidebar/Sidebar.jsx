import React from 'react';

import { images } from '../../constants';

import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="app__sildebar">
      <div className="app__sidebar-item">
        <span className="app__sidebat-item-title">ABOUT ME</span>
        <img src={images.wp} className="app__sidebar-img" alt="anything" />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
      </div>
      <div className="app__sidebar-item">
        <span className="app__sidebat-item-title">categories</span>
        <ul className="app__sidebar-list">
          <li className="app__sidebar-list-item">Life</li>
          <li className="app__sidebar-list-item">Music</li>
          <li className="app__sidebar-list-item">Style</li>
          <li className="app__sidebar-list-item">Tech</li>
          <li className="app__sidebar-list-item">Sports</li>
        </ul>
      </div>
      <div className="app__sidebar-item">
        <span className="app__sidebat-item-title">follow us</span>
        <div className="app__sidebar-socialIcons">
          <i className="sidebar__left-icons fa-brands fa-facebook"></i>
          <i className="sidebar__left-icons fa-brands fa-twitter"></i>
          <i className="sidebar__left-icons fa-brands fa-instagram-square"></i>
          <i className="sidebar__left-icons fa-brands fa-pinterest-square"></i>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;