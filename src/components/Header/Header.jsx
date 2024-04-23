import React, { useEffect, useState } from "react";
import logo from '../../assets/icon/logo.png'
import './Header.css'
import '../../styles/variables.css'
import { IoCloseSharp } from "react-icons/io5";
import { ImMenu } from "react-icons/im";

function Header() {
    const [menuIsVisible, setMenuIsVisible] = useState(false)

    const handleMenu = () => {
        setMenuIsVisible(!menuIsVisible)
    }

    const handleResize = () => {
        if (window.innerWidth > 750 && !menuIsVisible) {
            setMenuIsVisible(true)
        }
        if (window.innerWidth <= 750 && menuIsVisible) {
            setMenuIsVisible(false)
        }
    }

    useEffect(() => {
        window.addEventListener("resize", handleResize)
        return () => {
            window.removeEventListener("resize", handleResize)
        }
    }, [menuIsVisible])

    return (
        <>
            <div className="container-header">
                <header className="header-app">
                    <div className="logo">
                        <img src={logo} alt="logo-image" />
                    </div>
                    {menuIsVisible || window.innerWidth > 750 ?
                        <nav className="nav-header">
                            <div className="about"> 
                                <a href="#about-scroll">
                                    <span>Quem Somos</span>                                  
                                </a>                               
                            </div>
                            <div className="portifolio">
                                <a href="#projects-scroll">
                                    <span>Portifólio</span>
                                </a>
                            </div>
                            <div className="contact">
                                <a href="#contacts-scroll">
                                    <span>Contato</span>
                                </a>
                            </div>
                        </nav> : <></>}
                    <button id="btn-mobile" onClick={handleMenu}>
                        {menuIsVisible ? <IoCloseSharp className="meu-close" /> : <ImMenu className="menu-burger" />}
                    </button>
                </header>
            </div>
        </>
    )
}

export default Header;