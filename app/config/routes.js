const React = require('react'),
    ReactRouter = require('react-router'),
    Router = ReactRouter.Router,
    Route = ReactRouter.Route,
    IndexRoute = ReactRouter.IndexRoute,
    hashHistory = ReactRouter.hashHistory,
    Main = require('../components/Main'),
    Home = require('../components/Home');

let routes = (
    <Router history={hashHistory}>
        <Route path="/" component={Main}>
            <IndexRoute component={Home} />
            {/*<Route path="playerOne" header="Player One" component={PromptContainer} />*/}
            {/*<Route path="playerTwo/:playerOne" header="Player Two" component={PromptComponent}/>*/}
            {/*<Route path="battle" component={ConfirmBattleContainer} />*/}
            {/*<Route path="results" component={ResultsContainer}/>*/}
        </Route>
    </Router>
);

module.exports = routes;