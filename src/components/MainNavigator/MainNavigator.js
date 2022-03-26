import React from 'react';

import './MainNavigator.css';

import MainHeader from './MainHeader';
import Links from './Links';

import { GiHamburgerMenu } from 'react-icons/gi';

const MainNavigator = ({ className }) => {
  return (
    <MainHeader className={`links ${className}`}>
      <button
        type='button'
        className='hamburger'
        onClick={() => alert('you pressed the hamburger icon')}
      >
        <GiHamburgerMenu
          className='hamburger-icon'
          size='2.5em'
        />
      </button>
      <a href='/'>
        <h3 className='title'>Sophie Francis</h3>
      </a>
      <Links />
    </MainHeader>
  )
}

export default MainNavigator;
