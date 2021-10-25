import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

const SidebarLink = styled(Link)`
    display: flex;
    color: black;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    list-style: none;
    height: 50px;
    text-decoration: none;
    font-size: 18px;

    &:hover {
        background: #F50057;
        border-left: 4px solid pink;
        cursor: pointer;
        color: #fff;
    }
`;

const SidebarLabel = styled.span`
    margin-left: 16px;
`;

const DropdownLink = styled(Link)`
    background: #e5e5e5;
    height: 40px;
    padding-left: 3rem;
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #000;
    font-size: 18px;

    &:hover {
        background: orange;
        color: #fff;
        cursor: pointer;
    }
`;

const Submenu = ({ item }) => {

    const [subnav, setSubnav] = useState(false);

    const showSubnav = () => setSubnav(!subnav);
  
    return (
      <>
        <SidebarLink to={item.path} onClick={item.subNav && showSubnav}>
          <div>
            {item.icon}
            <SidebarLabel>{item.title}</SidebarLabel>
          </div>
          <div>
            {item.subNav && subnav
              ? item.iconOpened
              : item.subNav
              ? item.iconClosed
              : null}
          </div>
        </SidebarLink>
        {subnav &&
          item.subNav.map((item, index) => {
            return (
              <DropdownLink to={item.path} key={index}>
                {item.icon}
                <SidebarLabel>{item.title}</SidebarLabel>
              </DropdownLink>
            );
          })}
      </>
    );
;}

export default Submenu;