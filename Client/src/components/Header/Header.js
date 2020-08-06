import React from 'react';
import {  Link } from 'react-router-dom'
import logo from '../../assets/logo/Logo-brainflix.svg';
import upload from '../../assets/icons/SVG/Icon-upload.svg';
import './header.scss'

const Header = () =>{
    return (
        <div className='header'>
            <Link to='/'>
                <img className="header__logo" src={logo} alt="BrainFlix Logo"/>
            </Link>
            <form className="header__form">
                <input className="header__search" type='text' placeholder='Search' />
                <div className="header__div">
                    <Link to="/upload" style={{ textDecoration: 'none' }}>
                        <button className="header__button"> 
                            <img className="header__upload" src={upload} alt="Upload Icon" />
                            upload
                        </button>
                    </Link>
                    <img className='header__username' src='/Images/Mohan-muruge.jpg' alt="Username Icon" />
                </div>
            </form>
        </div>
    )
}

export default Header;