import React, { Component } from 'react';
import Axios from 'axios';

class Post extends Component {
	state = {
		post: null
	};

	componentDidMount() {
		let id = this.props.match.params.post_id;
		Axios.get('https://jsonplaceholder.typicode.com/posts/' + id).then(
			res => {
				this.setState({
					post: res.data
				});
			}
		);
	}
	render() {
		const post = this.state.post ? (
			<div className="post">
				<h4>{this.state.post.title}</h4>
				<p>{this.state.post.body}</p>
			</div>
		) : (
			<div> Loading Post ...</div>
		);
		return <div className="container">{post}</div>;
	}
}
export default Post;
