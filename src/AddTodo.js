import React, { Component } from 'react';

class AddTodo extends Component {
	state = {
		content: null
	};
	handleChange = e => {
		this.setState({
			content: e.target.value
		});
	};
	handleSubmit = e => {
		e.preventDefault();
		this.props.addTodo(this.state);
		this.setState({
			content: ''
		});
    };

	render() {
		return (
			<div>
				<form onSubmit={this.handleSubmit} className="form-inline my-3">
					<div className="form-group">
						<label htmlFor="Add to your TODO list" />
						<input
							onChange={this.handleChange}
							type="text"
							id="newtodo"
							className="form-control"
							placeholder="Add New TODO"
							aria-describedby="helpId"
							value={this.state.content}
						/>
					</div>
					<button type="submit" className="btn btn-primary mx-3">
						Add to List
					</button>
				</form>
			</div>
		);
	}
}
export default AddTodo;
