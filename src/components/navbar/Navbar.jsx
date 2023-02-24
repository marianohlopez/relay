import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, NavLink } from 'react-router-dom';
import './navbar.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import logo from './Logo-rojo.png'

const NavBar = ({Toggle}) => {

    return (

        <Navbar onToggle={Toggle} className='navBar' expand="lg">
            <Container>
                <Navbar.Brand><Link to={'/'}><img className="logo" src={logo} alt="Logo de empresa"/></Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse className={({isActive}) => (isActive? console.log("hola") :  console.log("chau"))}  id="basic-navbar-nav">
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
                                <NavLink className={({isActive}) => (isActive? 'btnNavActive' :  'btnNav')} to={'/'}>Tours</NavLink>
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