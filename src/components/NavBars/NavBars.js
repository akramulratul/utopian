import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './NavBars.css'
const NavBars = () => {
    return (
        <Navbar className="w-100 px-5 nav-holder" expand="lg">
            <Navbar.Brand className='logo'> <Link to='/'> <span className='highlight'>Utho</span>pian</Link> </Navbar.Brand >
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto link-item d-flex align-items-center">
                    <Link className="link mx-lg-4" to="/">Home</Link>
                    <Link className="link mx-lg-4" to="/orders">Orders</Link>
                    <Link className="link mx-lg-4" to="/admin">Admin</Link>

                    <Link className="link mx-lg-4" to="/checkout"> Checkout</Link>
                    <button className='login-btn'>{<Link to="/login">Login</Link>}</button>
                </Nav>
            </Navbar.Collapse>
        </Navbar >
    );
};

export default NavBars;

// loggedInUser.name ? loggedInUser.name : 