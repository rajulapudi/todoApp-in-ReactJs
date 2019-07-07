import React from 'react';

const Todos = ({ todos }) => {
	const todolist = todos.map(eachtodo => {
		return (
			<div>
				<ul className="list-group block">
					<li className="list-group-item inline-block">
						<span>{eachtodo.content}</span>
						<span className="float-right">
							<i className="mx-1 fas fa-check-circle" />
							<i className="mx-1 fas fa-minus-circle" />
						</span>
					</li>
				</ul>
			</div>
		);
	});
	return todolist;
};
export default Todos;
