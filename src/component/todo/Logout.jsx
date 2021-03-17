import React, { Component } from 'react'
import PropTypes from 'prop-types'
import 'bootstrap/dist/css/bootstrap.min.css';


export class Logout extends Component {
    static propTypes = {

    }

    render() {
        return (
            <div>
                <h1>You Are Logged out!</h1>
                <div className="container">
                    Thank you!!
                </div>
            </div>
        )
    }
}

export default Logout
