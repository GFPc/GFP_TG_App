import React, {useState} from "react";
import '../styles/header.css'
import {eventWrapper} from "@testing-library/user-event/dist/utils";

const Header = ({username = "Guest"}) => {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <div className="header-wrapper">
            <div className="menu-screen" style={{display: menuOpen ? "flex" : "none"}} onClick={ () => setMenuOpen(false)}>
                <div className="menu-content">
                    <div className="link">
                        <a href="#">News</a>
                    </div>
                    <div className="link">
                        <a href="#">Messages</a>
                    </div>
                    <div className="link">
                        <a href="#">Settings</a>
                    </div>
                </div>
            </div>
            <div className="header">
                <div className="icon">

                </div>

                <div className="data">
                    <span className={"username"}>{username}</span>
                </div>
                <div className="links-menu">
                    <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="800px" height="800px" viewBox="0 0 24 24" fill="none">
                            <path d="M4 6H20M4 12H20M4 18H20" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>

                </div>
            </div>
        </div>
    );
}
export default Header