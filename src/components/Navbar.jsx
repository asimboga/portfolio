import React from 'react'
import { NavLink } from 'react-router-dom'
import $ from "jquery";


const Navbar = () => { 

    $(window).scroll(function(){
        if($(document).scrollTop() > 50) { 
             $('nav').addClass('responsive');
             } else {
                 $('nav').removeClass('responsive');
                 }
       })

    return (
        <>
            <nav className="nav">
                <input type="checkbox" id="burger" />
                <label htmlFor="burger" className='nav__bg'>
                    <i className="fas fa-bars"></i>
                </label>
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