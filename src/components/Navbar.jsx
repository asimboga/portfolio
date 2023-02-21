import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => { 
    return (
        <>
            <nav className="nav">
                <ul className="nav__list">
                    <li className="nav__item">
                        <NavLink to="/" className="nav__link" href="/" Match="NavLinkMatch.All" >Home</NavLink>
                    </li>
                    <li className="nav__item">
                        <NavLink to="about" className="nav__link" href='about'>About Me</NavLink>
                    </li>
                    <li className="nav__item">
                        <NavLink to="projects" className="nav__link" href='projects'>My Projects</NavLink>
                    </li>
                    <li className="nav__item">
                        <NavLink to="contact" className="nav__link" href='contact'>Contact</NavLink>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default Navbar