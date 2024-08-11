import React from "react";
import SideNav, { Toggle, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import './SideBar.css';
import { useNavigate } from "react-router-dom";
import image from './assets/surf1.png'; // Ensure the path to the image is correct

function SideBar() {
    const navigate = useNavigate();

    return (
        <SideNav
            onSelect={selected => {
                console.log(selected);
                navigate(selected); // Navigate to the selected route
            }}
            className='sidebar'
        >
            <SideNav.Toggle />

            {/* Image at the top of the sidebar */}
            <div className="sidebar-header">
                <img src={image} alt="Sidebar Header" className="sidebar-image" />
            </div>

            <SideNav.Nav defaultSelected='merchant'>
                <NavItem eventKey='merchant'>
                    <NavIcon><i className="fa fa-fw fa-building" style={{ fontSize: '1.5rem' }}></i></NavIcon>
                    <NavText>Merchant</NavText>
                </NavItem>
                {/* Add more NavItems as needed */}
            </SideNav.Nav>
        </SideNav>
    );
}

export default SideBar;
