import React, {useState} from "react";
import './Navbar.css';
import {HashLink} from "react-router-hash-link";


function Navbar (){
    /* TODO:
    *   -Have a function that keeps the underline on the section that is selected
    *
    *
    * */


    const[click, setClick] = useState(false);

    const handleMenuClick = () => setClick(!click);

    const closeMobileMenu = () => setClick(false);

    return(
        <nav className='navbar'>
            <div className='navbar-container'>
                <HashLink to='/#IntroSection' className='navbar-logo' onClick={closeMobileMenu} smooth>
                    JSII
                </HashLink>
            </div>
            <div className='menu-icon' onClick={handleMenuClick}>
                <i className={click ? "fas fa-minus" : "fas fa-ellipsis-v"}/>
            </div>
            <ul className={click ? "nav-menu active" : "nav-menu"}>
                    <li className="nav-item">
                        <HashLink to='/#AboutMeSection' className='nav-links' onClick={closeMobileMenu} smooth>
                            About Me
                        </HashLink>
                    </li>
                    <li className="nav-item">
                        <HashLink to='/#ProjectsSection' className='nav-links' onClick={closeMobileMenu} smooth>
                            Projects
                        </HashLink>
                    </li>
                    <li className="nav-item">
                        <HashLink to='/#ContactMeSection' className='nav-links' onClick={closeMobileMenu} smooth>
                            Contact Me
                        </HashLink>
                    </li>
            </ul>
        </nav>
    );
}


export default Navbar;