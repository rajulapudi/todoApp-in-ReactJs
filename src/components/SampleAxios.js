import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class SampleAxios extends Component {
	state = {
		posts: []
	};
	componentDidMount() {
		axios.get('https://jsonplaceholder.typicode.com/posts').then(res => {
			this.setState({
				posts: res.data.slice(0, 10)
			});
		});
	}
	render() {
		const posts = this.state.posts;
		const postList = posts.length ? (
			posts.map(post => {
				return (
					<div className="card" key={post.id}>
						<img
							className="card-img-top"
							src="holder.js/100x180/"
							alt=""
						/>
						<div className="card-body">
							<Link to={'/sample/' + post.id}>
								<h4 className="card-title">{post.title}</h4>
							</Link>
							<p className="card-text">{post.body}</p>
						</div>
					</div>
				);
			})
		) : (
			<div>There are no Posts!!</div>
		);
		return (
			<div className="container">
				<h4>Sample Axios PAGE</h4>
				{postList}
			</div>
		);
	}
}
export default SampleAxios;
