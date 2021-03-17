import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import HelloWordService from '../../api/todo/HelloWordService.js'

export class Welcome extends Component {
   constructor(props) {
       super(props)
       this.retriveWelcomeMessage = this.retriveWelcomeMessage.bind(this);
   }

    render() {
        return (
            <>
            <h1>Welcome!</h1>
            <div className="container">
            <h4> Welcome  {this.props.match.params.name}.
             you can manage your todos  <Link to="/todolist">Here</Link></h4>
            </div>

            <div className="container">
                Click Here to Get msg
             <button onClick={this.retriveWelcomeMessage}
              className="btn btn-success">Get Welcome</button>
            </div>

            

            </>
        )
    }

    retriveWelcomeMessage() {
        HelloWordService.executeHelloWordService()
        .then(response => console.log(response))
        //.catch()
    }
}

export default Welcome
