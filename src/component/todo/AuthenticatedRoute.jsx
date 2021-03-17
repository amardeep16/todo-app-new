import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Redirect, Route } from 'react-router-dom'
import AuthenticationService from './AuthenticationService.js';

export class AuthenticatedRoute extends Component {
    static propTypes = {

    }

    render() {
        if(AuthenticationService.isUserLoggedIn()) {
             return <Route {...this.props}/>

        } else {
           return <Redirect to="/login"/>
        }
    }
}

export default AuthenticatedRoute
