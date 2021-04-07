import './header.css'
import HeaderLogo from '../Assets/HeaderLogo.png'
import React from 'react'
import $ from 'jquery';


export class Header extends React.Component
{
    handleScroll()
    {   
        if($(window).scrollTop() > 250)
        {
            
        }
    }
    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }
    
    render()
    {
        return(
            <header>
                <a href="" id="LogoContainer"><img src={HeaderLogo} alt="Burnside Logo" id="HeaderLogo" /></a>
                <div id="header-blur"></div>
                <a href="#MainPhoto" className="HeaderLink" style={{gridColumn: 4, opacity: 1}}>Home</a>
                <a href="#AboutSection" className="HeaderLink" style={{gridColumn: 5}}>About</a>
                <a href="#VexInfoBody" className="HeaderLink" style={{gridColumn: 6}}>Edr  Iq</a>
                <a href="#AwardsArea" className="HeaderLink" style={{gridColumn: 7}}>Awards</a>
                <a href="#RobotsArea" className="HeaderLink" style={{gridColumn: 8}}>Robots</a>
                <a href="#SponsorArea" className="HeaderLink" style={{gridColumn: 9}}>Sponsors</a>
                <a href="#Footer" className="HeaderLink" style={{gridColumn: 10}}>Contact</a>
            </header>   
        ); 
    }
}