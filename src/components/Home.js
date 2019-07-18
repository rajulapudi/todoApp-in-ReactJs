import React, { Component } from 'react';
import Todos from '../Todos';
import AddTodo from '../AddTodo';

class Home extends Component {
	state = {
		todos: [{ id: 1, content: '1st todo' }, { id: 2, content: '2nd todo' }]
	};
	addTodo = todo => {
		todo.id = Math.random();
		let todos = [...this.state.todos, todo];
		this.setState({
			todos
		});
	};
	render() {
		return (
			<div className="jumbotron jumbotron-fluid">
				<div className="container">
					<h1 className="display-3 text-center">TODO Home</h1>
					<p className="lead text-center">
						This is my first react Home
					</p>
				</div>
				<div className="todoList container">
					<Todos todos={this.state.todos} />
				</div>
				<div className="addTodo container">
					<AddTodo addTodo={this.addTodo} />
				</div>
			</div>
		);
	}
}
export default Home;
