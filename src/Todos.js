import React, { Component } from 'react';

class Todos extends Component {
	render() {
		const todolist = this.props.todos.map(eachtodo => {
			return (
				<div id={eachtodo.id} key={eachtodo.id}>
					<ul className="list-group block">
						<li className="list-group-item inline-block">
							<span className="content">{eachtodo.content}</span>
							<span className="float-right">
								<i
									onClick={this.handleOnClickDone.bind(
										this,
										eachtodo
									)}
									className="mx-1 fas fa-check-circle"
								/>
								<i
									onClick={this.handleOnClick.bind(
										this,
										eachtodo
									)}
									className="mx-1 fas fa-minus-circle"
								/>
							</span>
						</li>
					</ul>
				</div>
			);
		});
		return todolist;
	}
	handleOnClick(eachtodo) {
		let x = document.getElementById(eachtodo.id);
		x.style.display = 'none';
	}
	handleOnClickDone(eachtodo) {
		let y = document.getElementById(eachtodo.id);
		y.querySelector('.content').style.textDecoration = 'line-through';
		console.log(y);
	}
}

export default Todos;
