import React from 'react';
import Rainbow from '../hoc/Rainbow';

/* Functional Component */

const Contact = () => {
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

export default Rainbow(Contact);
