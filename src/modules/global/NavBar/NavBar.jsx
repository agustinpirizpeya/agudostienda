import './navBar.css';
import { Link } from 'react-router-dom';
import React from 'react';
import logo from '../../../assets/icons/logo-market.svg'
import CardWidget from "../../../components/CartWidget/CardWidget";

function NavBar(){
    return(
        <div>
            <div className='navbar'>
                <div className='logo'>
                    <Link to="/"><CardWidget icon={logo}/></Link>
                </div>
                <div className="topnav">
                    {/* <a className='active'></a> */}
                    <Link className="active" to="/">Home</Link>
                    
                    <Link to="/">Catalog</Link>
                    <Link to="/contact">Contact</Link>
{/*                     <a href="#home" className="active">Home</a>
                    <a href="#news">News</a>
                    <a href="#contact">Contact</a> */}
                </div>
            </div>
        </div>
    );
};

export default NavBar;
