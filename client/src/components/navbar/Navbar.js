import React, { useState, useEffect } from 'react'
import * as actionType from '../../constants/actionTypes';
import { useHistory, useLocation } from 'react-router-dom';
import { useDispatch } from "react-redux";
import decode from 'jwt-decode';
import { ImSwitch } from "react-icons/im";
import { SiShopify } from 'react-icons/si';
import { Link } from 'react-router-dom';
import { ButtonElement } from '../PageStyles/Button';
import {BsMicFill} from 'react-icons/bs';
import Mic from './Mic'
import './navbar.css';

const Navbar = () => {

    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    const dispatch = useDispatch();
    const location = useLocation();
    const history = useHistory();

    const logout = () => {
        dispatch({ type: actionType.LOGOUT });

        history.push('/auth');

        setUser(null);
    };

    useEffect(() => {
        const token = user?.token;

        if (token) {
            const decodedToken = decode(token);

            if (decodedToken.exp * 1000 < new Date().getTime()) logout();
        }

        setUser(JSON.parse(localStorage.getItem('profile')));
    }, [location]);

    return (
        <div className="navbar">
            <p className="logo"></p>
            <p className="name"><Link to="/"><SiShopify className="m-2" style={{ color: "#fff", padding: "5px" }} />Shopway</Link></p>
            <p className="reflection">Shopway</p>
            
            {/* <input style={{
                position:"relative",
                right:"38%",
                }} type="text" placeholder="Search an Item"/>     */}
            <div>
                {user?.result ? (
                    <div className="profile">
                        <img alt={user?.result.name} src={user?.result.imageUrl} />
                        <h4 style={{ color: "white", paddingTop: "5px" }}>Hello, {user?.result.name}</h4>
                        <button style={{ background: "transparent", border: "none" }} variant="contained" onClick={logout} ><ImSwitch className="mb-4" style={{ color: "white", fontSize: "20px" }} /></button>
                    </div>
                ) : (
                    <ButtonElement className="mb-4" style={{ width: "auto" }}><a style={{ textDecoration: "none", color: "white" }} href="/auth#card">Sign In</a></ButtonElement>
                )}
            </div>
               <Mic/>  
        </div>
    );
};

export default Navbar;