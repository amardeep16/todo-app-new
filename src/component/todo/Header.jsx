import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import AuthenticationService from './AuthenticationService.js';

export class Header extends Component {
    static propTypes = {

    }

    render() {
        const isUserLoggedIn = AuthenticationService.isUserLoggedIn();
        console.log(isUserLoggedIn);
        return (
            <header>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    <div><a className="navbar-brand">My Todo list</a></div>
                    <ul className="navbar-nav navbar-collapse justify-content-start">
                        {isUserLoggedIn && <li><Link className="nav-link" to="/welcome/:name">Home</Link></li>}
                        {isUserLoggedIn && <li><Link className="nav-link" to="/todolist">Todos</Link></li>}
                    </ul>
                    <ul className="navbar-nav navbar-collapse justify-content-end">
                        {!isUserLoggedIn && <li ><Link className="nav-link" to="/login">Login</Link></li>}
                        {isUserLoggedIn && <li ><Link className="nav-link" to="/logout" onClick={AuthenticationService.logout}>Logout</Link></li>}
                    </ul>
                </nav>
            </header>
        
        )
    }
}

export default Header
