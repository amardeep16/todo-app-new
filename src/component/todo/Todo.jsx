import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Login from './Login'
import Welcome from './Welcome'
import TodoList from './TodoList'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import Logout from './Logout'
import AuthenticatedRoute from './AuthenticatedRoute.jsx';
export class Todo extends Component {
    static propTypes = {

    }

    render() {
        return (
            <div className="todo__app">
                <Router>
                    <Header/>

                <Switch>
                    <Route path='/' exact component={Login}/>
                    <Route path='/login' component={Login}/>
                    <AuthenticatedRoute path='/welcome/:name' component={Welcome}/>
                    <AuthenticatedRoute path='/todolist' component={TodoList}/>
                    <Route path='/logout' component={Logout}/>
                    <Route component={ErrorComponent}/>
                    </Switch>
                    <Footer/>
                </Router>
            </div>
        )
    }
}

function ErrorComponent () {
    return <div>Error Occured!! Contact Suport Mr.John</div>
}

export default Todo
