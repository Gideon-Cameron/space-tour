import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Logo from './assets/logo.svg'
import Burger from './assets/icon-hamburger.svg'
import closeIcon from './assets/icon-close.svg'

function Nav() {
    const [open, setOpen] = React.useState(false);
    const [active, setActive] = useState(window.location.pathname.replace('/', '') || 'home');

    useEffect(() => {
        setActive(window.location.pathname.replace('/', '') || 'home');
        clickHomeButton(); 
    }, []);

    function close() {
        setOpen(false);
    }

    function clickHomeButton() {
        const homeButton = document.getElementById("homeButton");
        if (homeButton) {
            homeButton.click();
            // console.log("THE BUTTON WAS CLICKED");
        }
    }

    return (
        <header>
            <nav className={`nav ${open ? 'show' : ""}`}>
                <div className="logo">
                    <img src={Logo} alt="logo" />
                </div>
                <ul className={`ul ${active}`}>
                    <li onClick={close} className='active'><Link to='/' id="homeButton">00 Home</Link></li>
                    <li onClick={close}><Link to='/destination'>01 Destination</Link></li>
                    <li onClick={close}><Link to='/crew'>02 Crew</Link></li>
                    <li onClick={close}><Link to='/technology'>03 Technology</Link></li>
                </ul>

                <div onClick={() => setOpen(!open)} className="burger">
                    {
                        open === false ?
                            <img src={Burger} alt="" /> :
                            <img src={closeIcon} alt="" />
                    }
                </div>
            </nav>
        </header>
    );
}

export default Nav;