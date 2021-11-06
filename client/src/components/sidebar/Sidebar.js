import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { SidebarData } from "./SidebarData";
import Submenu from './Submenu';
import { IconContext } from 'react-icons/lib';

const Nav = styled.div`
    background: #e4e4e4;
    height: 10vh;
    width: 55px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    position: fixed;
    z-index: 5;
`;

const NavIcon = styled(Link)`
    margin-left: 0.7rem;
    height: 100px;
    font-size: 30px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    color: black;
`;

const SidebarNav = styled.nav`
    background: #cfcfcf;
    width: 250px;
    height: 100vh;
    display: flex;
    justify-content: center;
    position: fixed;
    top: 0;
    left: ${({ sidebar }) => (sidebar ? '0' : '-100%')};
    transition: 350px;
    z-index: 10;
    margin-top: 90px;
`;

const SidebarWrap = styled.nav`
    width: 100%;
`;

const Sidebar = () => {
    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);

    const user = JSON.parse(localStorage.getItem('profile'));

    // if (!user?.result?.name) {
    //     setSidebar = false;
    //   }

    //   else


    return (
        <>
            <IconContext.Provider value={{ color: `#000` }}>
                <Nav>
                    <NavIcon to="#">
                        <FaIcons.FaBars onClick={showSidebar} style={{color: "#464646"}}/>
                    </NavIcon>
                </Nav>
                <SidebarNav sidebar={sidebar}>
                    <SidebarWrap>
                        <NavIcon to='#'>
                            <AiIcons.AiOutlineClose onClick={showSidebar} />
                        </NavIcon>
                        {SidebarData.map((item, index) => {
                            return <Submenu item={item} key={index} />
                        })}
                    </SidebarWrap>
                </SidebarNav>
            </IconContext.Provider>
        </>
    );
};

export default Sidebar;