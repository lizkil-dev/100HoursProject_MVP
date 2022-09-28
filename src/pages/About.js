import React from 'react';
import { Link } from 'react-router-dom'

function About(props) {
  return (
    <div>
      Lisa Kilbinger, Web Developer based in Mainz, Germany
      <Link to="/">zur Startseite</Link>
    </div>
  );
}

export default About;