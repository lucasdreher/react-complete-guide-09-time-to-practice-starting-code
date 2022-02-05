import { Route, useParams } from 'react-router-dom';

import Comments from '../components/comments/Comments';

const QuoteDetail = () => {
	const params = useParams();

	return (
		<section>
			<h1>QuoteDetail</h1>
			<p>{params.quoteId}</p>
			<Route path="/quotes/:quoteId/comments" exact>
				<Comments />
			</Route>
		</section>
	);
};

export default QuoteDetail;
