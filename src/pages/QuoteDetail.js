import { Route, useParams } from 'react-router-dom';

import Comments from '../components/comments/Comments';
import HighlightedQuote from '../components/quotes/HighlightedQuote';

const DUMMY_QUOTES = [
	{
		id: 'q1',
		author: 'Nelson Mandela',
		text: 'The greatest glory in living lies not in never falling, but in rising every time we fall.'
	},
	{
		id: 'q2',
		author: 'Walt Disney',
		text: 'The way to get started is to quit talking and begin doing.'
	},
	{
		id: 'q3',
		author: 'Steve Jobs',
		text:
			"Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking."
	},
	{
		id: 'q4',
		author: 'Eleanor Roosevelt',
		text: 'If life were predictable it would cease to be life, and be without flavor.'
	},
	{
		id: 'q5',
		author: 'Oprah Winfrey',
		text:
			"If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough."
	},
	{
		id: 'q6',
		author: 'James Cameron',
		text: "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success."
	},
	{
		id: 'q7',
		author: 'John Lennon',
		text: "Life is what happens when you're busy making other plans."
	},
	{
		id: 'q8',
		author: 'Max',
		text: 'Learning React is fun!'
	},
	{
		id: 'q9',
		author: 'Maximilian',
		text: 'Learning React is great!'
	}
];

const QuoteDetail = () => {
	const params = useParams();

	const quote = DUMMY_QUOTES.find((item) => item.id === params.quoteId);

	if (!quote) {
		return (
			<div className="centered">
				<p>No quote found!</p>
			</div>
		);
	}

	return (
		<section>
			<HighlightedQuote text={quote.text} author={quote.author} />
			<Route path="/quotes/:quoteId/comments" exact>
				<Comments />
			</Route>
		</section>
	);
};

export default QuoteDetail;
