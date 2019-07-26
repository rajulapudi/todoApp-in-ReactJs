import React, { Component } from 'react';
import Todos from '../Todos';
import AddTodo from '../AddTodo';
import { connect } from 'react-redux';

class Home extends Component {
	addTodo = todo => {
		todo.id = Math.random();
		let todos = [...this.state.todos, todo];
		this.setState({
			todos
		});
	};
	render() {
		console.log(this.props);
		return (
			<div className="jumbotron jumbotron-fluid">
				{/* <div className="container">
					<h1 className="display-3 text-center">TODO Home</h1>
					<p className="lead text-center">
						This is my first react App
					</p>
				</div>
				<div className="todoList container">
					<Todos todos={this.state.todos} />
				</div>
				<div className="addTodo container">
					<AddTodo addTodo={this.addTodo} />
				</div> */}
			</div>
		);
	}
}
const mapStateToProps = state => {
	return {
		todos: state.todos
	};
};

export default connect(mapStateToProps)(Home);
