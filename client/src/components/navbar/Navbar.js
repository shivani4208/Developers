import React from 'react'
import { SiShopify } from 'react-icons/si';
import { Link } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {

    return (
        <div className="navbar">
            <p className="logo"></p>
            <p className="name"><Link to="/"><SiShopify style={{ color: "#fff", padding: "5px" }} />Shopway</Link></p>
            <p className="reflection">Shopway</p>
        </div>
    );
};

export default Navbar;