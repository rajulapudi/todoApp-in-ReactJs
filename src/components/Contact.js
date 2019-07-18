import React from 'react';

/* Functional Component */

const Contact = props => {
	setTimeout(() => {
		props.history.push('/home');
	}, 2000);
	return (
		<div className="container">
			<h4>Contact PAGE</h4>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit.
				Exercitationem, mollitia eum ipsum numquam aut nesciunt eaque
				suscipit veniam laboriosam ea vel accusamus soluta earum
				facilis, aspernatur debitis, voluptas quis reiciendis?
			</p>
		</div>
	);
};

export default Contact;
