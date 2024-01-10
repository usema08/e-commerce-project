/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import {FiHeart} from 'react-icons/fi';
import {AiOutlineShoppingCart, AiOutlineUserAdd} from 'react-icons/ai';
import "./Nav.css";

function Nav() {
  return <nav>
    <div className='nav-container'>
        <input type='text' 
        className='search-input'
        placeholder='Enter your dream shoes.' />
    </div>
    <div className='profile-container'>
        <a href='#'>
            <FiHeart className='nav-icons'></FiHeart>
        </a>
        <a href=''>
            <AiOutlineShoppingCart className='nav-icons' />
        </a>
        <a href=''>
            <AiOutlineUserAdd className='nav-icons' />
        </a>
    </div>
  </nav>
}

export default Nav;