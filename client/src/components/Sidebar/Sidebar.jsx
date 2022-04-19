import React, {useEffect} from 'react';
import {useDispatch,useSelector} from 'react-redux'

import { images } from '../../constants';
import {getCategories} from '../../reduxState/actions/categories.action'

import './Sidebar.css';

const Sidebar = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories())
  }, [dispatch])

  const categories = useSelector((state) => state.categoriesReducer)

  console.log(categories)
  
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
          {
            categories?.map((category) => (
              <li className="app__sidebar-list-item">{category.name}</li>
            ))
          }
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