import * as React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import DefaultLayout from './layouts/DefaultLayout';
import PublicLayout from './layouts/PublicLayout';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../static/css/reset.css';

const App = () => {
	return (
		<BrowserRouter>
			<Switch>
				<PublicLayout path="/login" component={Login} />
				<DefaultLayout path="/" component={Home} />
			</Switch>
		</BrowserRouter>
	);
};

export default App;
