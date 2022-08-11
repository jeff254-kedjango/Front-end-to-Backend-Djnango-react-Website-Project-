import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Logout from './components/logout';
import LandingPage from './components/PageComponents/LandingPage';
import Exercise from './components/PageComponents/Exercise';
import LifeStyle from './components/PageComponents/LifeStyle';
import Projects from './components/PageComponents/Projects';
import Fitness from './components/PageComponents/Fitness';
import Feedback from './components/Feedback';
import NutritionSingle from './components/PageComponents/NutritionSingle';
import BlogSingle from './components/PageComponents/BlogSingle';

const routing = (
	<Router>
		<React.StrictMode>
			<Switch>
				<Route exact path ='/' component={LandingPage}/>
				<Route exact path="/projects" component={Projects} />
				<Route exact path='/lifestyle' component={Fitness} />
				<Route exact path='/exercises' component={Exercise} />
				<Route exact path='/blog' component={LifeStyle} />
				<Route exact path= '/feedback' component={Feedback} />
				<Route exact path='/nutrition/:slug' component={NutritionSingle} />
				<Route exact path='/blog/:slug' component={BlogSingle} />
				<Route path="/logout" component={Logout} />
			</Switch>
		</React.StrictMode>
	</Router>
);

ReactDOM.render(routing, document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

serviceWorker.unregister();

				// <Route path="/register" component={Register} />
				// <Route path="/login" component={Login} />
