import React, { Component } from 'react';

class ReactLifeCycle extends Component {
	state = {
		title: 'Initial TITLE before Updating'
	};

	handleClick = () => {
		this.setState({
			title: 'Updated Title after the Click'
		});
	};

	/* Load default Props */

	method = (function() {
		console.log('This is Step-?? from IIFE!!!');
	})();

	componentWillMount() {
		/* This will be executed before the render */
		console.log('Step-1: before rendering');
	}
	componentWillUpdate() {
		/* This will be executed only when the Component get updates after the initial render and before the update take place */
		console.log('Step-4: This is just before Updating the State');
	}
	componentDidUpdate() {
		/* This will be executed only when the Component get updates after the initial render and after the update take place */
		console.log('Step-5: This is just after Updating the State');
	}
	componentDidMount() {
		/* This will be executed after the render */
		console.log('Step-2: after rendering');
	}
	render() {
		console.log(this.props);
		return (
			<div>
				<h1>{this.state.title}</h1>
				<p>This is step-3 - Rendering the JSX</p>
				<button
					onClick={this.handleClick}
					type="submit"
					className="btn btn-primary">
					CLick ME
				</button>
			</div>
		);
	}
}

export default ReactLifeCycle;
