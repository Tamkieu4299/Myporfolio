import React, {useState, useEffect} from "react";
import {Link} from'react-router-dom';
import Button from'./Button';
import './NavBar.css';

function NavBar(){
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);
    const [navbar, setNavbar] = useState(false);


    const handleClick=()=>setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton=()=>{
        if(window.innerWidth<=960){
            setButton(false);
        }
        else setButton(true);
    }

    window.addEventListener('resize', showButton);

    const changeBackground = () =>{
        if(window.scrollY>=80){
            setNavbar(true)
        }
        else setNavbar(false)
    }

    window.addEventListener('scroll', changeBackground);
    return(
        <nav className={navbar?'navbar active':'navbar'}>
            <div className="navbar-container">
                <a href="#">
                        Tam Challenges Coding<i class="fab fa-battle-net"></i>
                </a>
                <div className="menu-icon" onClick={handleClick}>
                    <i className={click ? 'fas fa-times': 'fas fa-bars'} />
                </div>
                <ul className={click ? 'nav-menu active': 'nav-menu'}>
                    <li className="nav-item">
                        <a href="#" className="nav-links" onClick={closeMobileMenu}>Home</a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-links" onClick={closeMobileMenu}>About Me</a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-links" onClick={closeMobileMenu}>Projects</a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-links" onClick={closeMobileMenu}>Skills</a>
                    </li>
                </ul>
                            </div>
        </nav>
    )
}

export default NavBar

