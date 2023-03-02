import Container from 'react-bootstrap/Container';
import { useState } from "react";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, NavLink } from 'react-router-dom';
import './navbar.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import logo from './Logo-rojo.png'

const NavBar = () => {

    const [font, setFont] = useState(false)

    const darkFont = () => font === false? setFont('fontHamburguer') : setFont(false);

    return (

        <Navbar onToggle={darkFont} className='navBar sticky-top'  expand="lg">
            <Container className={font}>
                <Navbar.Brand><ScrollLink to={'bandLogo'}><img className="logo" src={logo} alt="Logo de empresa"/></ScrollLink></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto ">
                        <ul className="btnNavBar">
                            <li>
                                <NavLink className={({isActive}) => (isActive? 'btnNavActive' :  'btnNav')}><ScrollLink to={'carousel'}>Discografia</ScrollLink></NavLink>
                            </li>
                            <li>
                                <NavLink className={({isActive}) => (isActive? 'btnNavActive' :  'btnNav')}><ScrollLink to={'videos'}>Videos</ScrollLink></NavLink>
                            </li>
                            <li>
                                <NavLink className={({isActive}) => (isActive? 'btnNavActive' :  'btnNav')}><ScrollLink to={'biografia'}>Biografia</ScrollLink></NavLink>
                            </li>
                            <li>
                                <NavLink className={({isActive}) => (isActive? 'btnNavActive' :  'btnNav')} to={'/'}>Fechas</NavLink>
                            </li>
                            <li>
                                <NavLink className={({isActive}) => (isActive? 'btnNavActive' :  'btnNav')} to={'/'}>Contacto</NavLink>
                            </li>
                        </ul>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;