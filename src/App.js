import { Fragment } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import MainNavigation from './components/layout/MainNavigation';
import Welcome from './components/layout/pages/Welcome';
import Quotes from './components/layout/pages/Quotes';
import QuoteDetail from './components/layout/pages/QuoteDetail';
import NewQuote from './components/layout/pages/NewQuote';

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