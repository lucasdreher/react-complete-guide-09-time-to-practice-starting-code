import { Fragment } from 'react';
import { Link } from 'react-router-dom';

const Welcome = () => {
	return (
		<Fragment>
			<h1 className="centered">Welcome to Great Quotes</h1>
			<div className="centered">
				<Link className="btn" to="/quotes">
					Let's get started!
				</Link>
			</div>
		</Fragment>
	);
};

export default Welcome;
