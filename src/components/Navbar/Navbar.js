import React, {useState} from "react";
import './Navbar.css';
import {Link} from "react-router-dom";

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
        <>
        <nav className='navbar'>
            <div className='navbar-container'>
                <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
                    JSII
                </Link>
            </div>
            <div className='menu-icon' onClick={handleMenuClick}>
                <i className={click ? "fas fa-minus" : "fas fa-ellipsis-v"}/>
            </div>
            <ul className={click ? "nav-menu active" : "nav-menu"}>
                    <li className="nav-item">
                        <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                            About Me
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/projects' className='nav-links' onClick={closeMobileMenu}>
                            Projects
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/contactme' className='nav-links' onClick={closeMobileMenu}>
                            Contact Me
                        </Link>
                    </li>
            </ul>
        </nav>
        </>
    );
}


export default Navbar;