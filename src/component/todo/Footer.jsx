import React, { Component } from 'react'
import PropTypes from 'prop-types'
import 'bootstrap/dist/css/bootstrap.min.css';

export class Footer extends Component {
    static propTypes = {

    }

    render() {
        return (
           <footer className="footer">
               <span className="text-muted">All Right Reserved 2021 @Ap</span>

           </footer>
        )
    }
}

export default Footer
