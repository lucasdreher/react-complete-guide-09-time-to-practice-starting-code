import { Fragment } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import MainNavigation from './components/layout/MainNavigation';
import Welcome from './pages/Welcome';
import Quotes from './pages/Quotes';
import QuoteDetail from './pages/QuoteDetail';
import NewQuote from './pages/NewQuote';

function App() {
	return (
		<Fragment>
			<MainNavigation />
			<main>
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
			</main>
		</Fragment>
	);
}

export default App;
