import React, { Component } from 'react'
import PropTypes from 'prop-types'
import 'bootstrap/dist/css/bootstrap.min.css';
import AuthenticationService from './AuthenticationService.js';

export class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: 'amardeep',
            password: '',
            hasLoginFailed: false,
            hasLogin: false
        }
        this.handleChange = this.handleChange.bind(this)
        this.loginClick = this.loginClick.bind(this)
        
    }

    handleChange(event) {
        this.setState(
            { 
                [event.target.name]
                    :event.target.value
            }
        )
    }

    loginClick() {

        if(this.state.username === 'amardeep' && this.state.password === 'abc') {
            AuthenticationService.registerSuccessfulLogin(this.state.username, this.state.password );
            this.props.history.push(`/welcome/${this.state.username}`)
           // this.setState({hasLogin: true})
            //this.setState({hasLoginFailed: false})
        }
        else {
            this.setState({hasLogin: false})
            this.setState({hasLoginFailed: true})
        }
    }

    render() {
        return (
            <div>
                <h1>Login</h1>
                <div className="container">
                {this.state.hasLoginFailed &&  <div className="alert alert-warning">Invalid Username/password</div>}
                {this.state.hasLogin && <div>Login Successful</div>}
                User Name:<input type="text" name="username" value={this.state.username} onChange={this.handleChange}/>
                PassWord: <input type="password" name="password" value={this.state.password} onChange={this.handleChange}/>
                <button className="btn btn-success" onClick={this.loginClick}>Login</button>
            </div>

            </div>
        )
    }
}



export default Login
