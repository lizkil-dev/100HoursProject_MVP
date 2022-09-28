import React from 'react';
import "./home.css"
import img from '../imgs/DSCF6801.JPG'



function Home(props) {
  return (
    <div  className="titleImg">
      <img src={img} alt="Title" />
    </div>
  );
}

export default Home;