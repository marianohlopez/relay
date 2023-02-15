import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, NavLink } from 'react-router-dom';
import './navbar.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './Logo-rojo.png'

const NavBar = () => {
    return (

        <Navbar className='navBar' expand="lg">
            <Container>
                <Navbar.Brand><Link to={'/'}><img className="logo" src={logo} alt="Logo de empresa"/></Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto ">
                        <ul className="btnNavBar">
                            <li>
                                <NavLink className={({isActive}) => (isActive? 'btnNavActive' :  'btnNav')} to={'/'}>Discografia</NavLink>
                            </li>
                            <li>
                                <NavLink className={({isActive}) => (isActive? 'btnNavActive' :  'btnNav')} to={'/'}>Videos</NavLink>
                            </li>
                            <li>
                                <NavLink className={({isActive}) => (isActive? 'btnNavActive' :  'btnNav')} to={'/'}>Biografia</NavLink>
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