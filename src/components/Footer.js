import React from 'react';
import {NavLink} from 'react-router-dom'

function Footer(props) {
  return (
    <footer>
      <ul>
        <li className='about'><NavLink to="/about">About</NavLink></li>
        <li className='photos'><NavLink to="/contact">Contact</NavLink></li>
      </ul>       
    </footer>
  );
}

export default Footer;