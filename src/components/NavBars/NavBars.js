import React, { useContext, useState } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import './NavBars.css'
import jwt_decode from "jwt-decode";
import { useDispatch } from 'react-redux';
import { logout } from '../Redux/Actions/userAction';


const NavBars = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    let token = '';
    let isAdmin = false
    if (localStorage.getItem('userInfo')) {
        const userInfo = JSON.parse(localStorage.getItem('userInfo'));
        token = userInfo.data.token;
        let decoded = jwt_decode(token);
        console.log(decoded);
        console.log(decoded.scopes === "USER");
        // let a = decoded.scopes
        // let b = "ADMIN"
        // let c = a = b
        if (decoded.scopes === "ADMIN") {
            isAdmin = true
        } else {
            isAdmin = false

        }
    }
    console.log(isAdmin);


    const logIn = () => {
        history.push('/login')
    }
    const logOut = () => {
        dispatch(logout())
        window.location.reload(false);
    }
    return (
        <Navbar className="w-100 px-5 nav-holder" expand="lg">
            <Navbar.Brand className='logo'> <Link to='/'> <span className='highlight'>Uto</span>pian</Link> </Navbar.Brand >
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto link-item d-flex align-items-center">
                    <Link className="link mx-lg-4" to="/">Home</Link>
                    {isAdmin ? <Link className="link mx-lg-4" to="/admin/dashboard">Admin</Link> :
                        <Link className="link mx-lg-4" to="/dashboard">Dashboard</Link>

                    }

                    <Link className="link mx-lg-4" to="/checkout"> Checkout</Link>
                    <button className='login-btn' onClick={token ? logOut : logIn}>{token ? "Log Out" : "Login"}</button>
                </Nav>
            </Navbar.Collapse>
        </Navbar >
    );
};

export default NavBars;

// loggedInUser.name ? loggedInUser.name : 