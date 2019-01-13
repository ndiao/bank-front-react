import React, { Component } from 'react';
import './App.css';
import Dashboard from './components/Dashboard';
import Header from './components/layout/Header';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AddCompte from './components/compte/AddCompte';
import AddUser from './components/user/AddUser';
import { Provider } from 'react-redux';
import store from './store';
import Landing from './components/layout/Landing';
import Login from './components/user/Login';
import jwt_decode from 'jwt-decode';
import setJWTToken from './securityUtils/setJWTToken';
import { SET_CURRENT_USER } from './actions/Types';
import { logout } from './actions/SecurityActions';

import SecureRoute from './securityUtils/SecureRoute';

const jwtToken = localStorage.jwtToken;

if (jwtToken) {
	setJWTToken(jwtToken);
	const decoded_jwtToken = jwt_decode(jwtToken);
	store.dispatch({
		type: SET_CURRENT_USER,
		payload: decoded_jwtToken
	});

	const currentTime = Date.now() / 1000;
	if (decoded_jwtToken.exp < currentTime) {
		// window.location.href = '/';
		store.dispatch(logout());
		window.location.href = '/';
	}
}

class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<Router>
					<div className="App">
						<Header />
						{
							// Public Routes
						}
						<Route exact path="/" component={Landing} />
						<Route exact path="/register" component={AddUser} />
						<Route exact path="/login" component={Login} />

						{
							// Private Routes
						}
						<Switch>
							<SecureRoute exact path="/dashboard" component={Dashboard} />
							<SecureRoute exact path="/addCompte" component={AddCompte} />
						</Switch>
					</div>
				</Router>
			</Provider>
		);
	}
}

export default App;
