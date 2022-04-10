import React from 'react'

import Header from  '../../container/Header/Header';
import Posts from '../Posts/Posts';
import Sidebar from '../../components/Sidebar/Sidebar';
import './Home.css';

const Home = () => {
  return (
    <>
    <Header />
      <div className="home">
        <Posts />
        <Sidebar />
    </div>
    </>
  )
}

export default Home