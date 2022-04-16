import React from 'react';

import {images} from '../../constants';

import './Header.css';

const Header = () => {
  return (
    <div className="header">
        <div className="header__header-titles">
            <span className="header__header-title-small">Write your Mind!!</span>
            <span className="header__header-title-large">Blogs</span>
        </div>
        <img className="header__img" src={images.background2} alt="background" />
    </div>
  )
}

export default Header;