import React from 'react';
import './Links.css';

import { Link } from 'react-router-dom';

const Links = () => {
  return (
    <ul className='main-navigator'>
      <li>
        <Link to='/' exact>Home</Link>
      </li>
      <li>
        <Link to='/'>Services</Link>
      </li>
      <li>
        <Link to='/'>Showcase</Link>
      </li>
      <li>
        <Link to='/my-story'>My Story</Link>
      </li>
      <li>
        <Link to='/'>Testimonials</Link>
      </li>
      <li>
        <Link to='/'>Appointments</Link>
      </li>
      <li>
        <Link to='/'>Contact</Link>
      </li>
    </ul>
  )
}

export default Links;
