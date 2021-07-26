import './navBar.css';
import React from 'react';
import logo from '../../assets/icons/logo-market.svg'

function NavBar(){
    return(
        <div className='navbar'>
            <div className='logo'>
            <div> <img src={logo}/> </div>
            </div>
                <div className="topnav">
                    <a href="#home" className="active">Home</a>
                    <a href="#news">News</a>
                    <a href="#contact">Contact</a>
                </div>
        </div>
    );
};

export default NavBar;
