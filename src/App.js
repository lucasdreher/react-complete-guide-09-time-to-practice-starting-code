import { Fragment } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import MainNavigation from './components/layout/MainNavigation';
import Welcome from './pages/Welcome';
import Quotes from './pages/Quotes';
import QuoteDetail from './pages/QuoteDetail';
import NewQuote from './pages/NewQuote';
import Layout from './components/layout/Layout';

function App() {
	return (
		<Layout>
			<Switch>
				<Route path="/" exact>
					<Redirect to="welcome" />
				</Route>
				<Route path="/welcome">
					<Welcome />
				</Route>
				<Route path="/quotes" exact>
					<Quotes />
				</Route>
				<Route path="/quotes/:quoteId">
					<QuoteDetail />
				</Route>
				<Route path="/new-quote">
					<NewQuote />
				</Route>
			</Switch>
		</Layout>
	);
}

export default App;
