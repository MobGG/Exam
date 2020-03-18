import React, { Component, Fragment } from 'react';
import buttons from '../components/buttons';
import TodoList from '../components/todoList';


export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todoArray: [
                { id: 1, title: 'todo1' },
                { id: 2, title: 'todo2' }
            ],
            search: '',
        };
        this.createTodo = this.createTodo.bind(this);
    }

    componentDidMount() {

    }

    componentWillUnmount() {

    }

    createTodo(title) {
        alert(title);
    }

    render() {
        const { todoArray } = this.state;
        return (
            <Fragment>
                home
                <TodoList todoArray={todoArray} actionRemove={this.createTodo} />
            </Fragment>
        );
    }
}





function createButton() {

}
