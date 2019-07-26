import React from 'react';

const Rainbow = WrappedComponent => {
	const colors = ['primary', 'secondary', 'success', 'danger', 'warning'];
	const randomColor = colors[Math.floor(Math.random() * 5)];
	const className = 'text-' + randomColor;
	//console.log(className);

	return props => {
		return (
			<div className={className}>
				<WrappedComponent {...props} />
			</div>
		);
	};
};
export default Rainbow;
