import './navBar.css';
import React from 'react';
import logo from '../../../assets/icons/logo-market.svg'
import CardWidget from "../../../components/CartWidget/CardWidget";

function NavBar(){
    return(
        <div>
            <div className='navbar'>
                <div className='logo'>
                    <CardWidget icon={logo}/>
                </div>
                <div className="topnav">
                    <a href="#home" className="active">Home</a>
                    <a href="#news">News</a>
                    <a href="#contact">Contact</a>
                </div>
            </div>
        </div>
    );
};

export default NavBar;
