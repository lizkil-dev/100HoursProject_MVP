import React from 'react';
import './nav.css'
import { NavLink } from 'react-router-dom'

function Nav(props) {

  return (
    <nav className='nav'>
      <div className='linkHome'>
        <span className='home'><NavLink to="/">Home</NavLink></span>
      </div>
      <div className='dropdown'>
        <ul className='photos'><NavLink to="/">Photos</NavLink>   
          <li className='dropdownItem'><NavLink to="/photos/belize">Belize</NavLink></li>     
          <li className='dropdownItem' ><NavLink to="/photos/elsalvador">El Salvador</NavLink></li>
          <li className='dropdownItem'><NavLink to="/photos/finland">Finland</NavLink></li>
          <li className='dropdownItem'><NavLink to="/photos/guatemala">Guatemala</NavLink></li>          
        </ul>
      </div>
    </nav>
  );
}

export default Nav;