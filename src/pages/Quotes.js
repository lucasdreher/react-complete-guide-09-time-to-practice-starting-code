import { useEffect } from 'react';

import QuoteList from '../components/quotes/QuoteList';
import NoQuotesFound from '../components/quotes/NoQuotesFound';
import LoadingSpinner from '../components/UI/LoadingSpinner';
import useHttp from '../hooks/use-http';
import { getAllQuotes } from '../lib/api';

// const DUMMY_QUOTES = [
// 	{
// 		id: 'q1',
// 		author: 'Nelson Mandela',
// 		text: 'The greatest glory in living lies not in never falling, but in rising every time we fall.'
// 	},
// 	{
// 		id: 'q2',
// 		author: 'Walt Disney',
// 		text: 'The way to get started is to quit talking and begin doing.'
// 	},
// 	{
// 		id: 'q3',
// 		author: 'Steve Jobs',
// 		text:
// 			"Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking."
// 	},
// 	{
// 		id: 'q4',
// 		author: 'Eleanor Roosevelt',
// 		text: 'If life were predictable it would cease to be life, and be without flavor.'
// 	},
// 	{
// 		id: 'q5',
// 		author: 'Oprah Winfrey',
// 		text:
// 			"If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough."
// 	},
// 	{
// 		id: 'q6',
// 		author: 'James Cameron',
// 		text: "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success."
// 	},
// 	{
// 		id: 'q7',
// 		author: 'John Lennon',
// 		text: "Life is what happens when you're busy making other plans."
// 	},
// 	{
// 		id: 'q8',
// 		author: 'Max',
// 		text: 'Learning React is fun!'
// 	},
// 	{
// 		id: 'q9',
// 		author: 'Maximilian',
// 		text: 'Learning React is great!'
// 	}
// ];

const Quotes = () => {
	const { sendRequest, status, data: loadedQuotes, error } = useHttp(getAllQuotes, true);

	useEffect(
		() => {
			sendRequest();
		},
		[ sendRequest ]
	);

	if (status === 'pending') {
		return (
			<div className="centered">
				<LoadingSpinner />
			</div>
		);
	}

	if (error) {
		return <p className="centered focused">{error}</p>;
	}

	if (status === 'completed' && (!loadedQuotes || loadedQuotes.length === 0)) {
		return <NoQuotesFound />;
	}

	return <QuoteList quotes={loadedQuotes} />;
};

export default Quotes;
