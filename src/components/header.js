import React, {useState} from "react";
import '../styles/header.css'

const Header = ({username = "Guest"}) => {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <div className="header">
            <div className="icon">

            </div>
            <div className="links-menu">
                <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="800px" height="800px" viewBox="0 0 24 24" fill="none">
                        <path d="M4 6H20M4 12H20M4 18H20" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
                <div className="menu-content" style={{display: menuOpen ? "block" : "none"}}>
                    <a href="#">News</a>
                    <a href="#">Games</a>
                    <a href="#">Music</a>
                </div>
            </div>
            <div className="data">
                <span>{username}</span>
            </div>
        </div>
    );
}
export default Header