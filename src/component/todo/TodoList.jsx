import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class TodoList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            todos:
            [
             {id : 1, descripation : 'This is React Learing', done:false, targetDate: new Date()},
             {id : 2, descripation : 'This is java Learing', done:false, targetDate: new Date()},
             {id : 3, descripation : 'This is Git Learing', done:false, targetDate: new Date()},
             {id : 4, descripation : 'This is Docker Learing', done:false, targetDate: new Date()},
             {id : 5, descripation : 'This is Javascript Learing', done:false, targetDate: new Date()}

            ]
        }
    }
    static propTypes = {
        prop: PropTypes
    }

    render() {
        return (
            <div>
                <h1>List todos</h1>
                <div className="container">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Sr No</th>
                            <th>descripation</th>
                            <th>Is Completed</th>
                            <th>Target Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.state.todos.map (
                            todo =>
                            <tr key={todo.id}>
                                <td>{todo.id}</td>
                                <td>{todo.descripation}</td>
                                <td>{todo.done.toString()}</td>
                                <td>{todo.targetDate.toString()}</td>
                            </tr>
                          )
                        }
                    </tbody>
                </table>
            </div>
        </div>
        )
    }
}
