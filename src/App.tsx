import React, { useState, useEffect } from 'react';
import { Router, Switch, Route, Link } from 'react-router-dom';
import NavBar from './components/NavBar';
import HomePage from './pages/HomePage';
//import SideBar from "./components/SideBar";
import Login from './pages/Login';
import { history } from './helpers/history';
import Homepage from './pages/HomePage';
import Register from './pages/Register';
import { useDispatch, useSelector } from "react-redux";

function App() {
	return (
		<Router history={history}>
			<div>
				<NavBar />
				<Switch>
					<Route
						exact
						path="/"
						component={Homepage}
					/>
					<Route
						exact
						path="/Login"
						component={Login}
					/>
					<Route
						exact
						path="/Register"
						component={Register}
					/>
				</Switch>
			</div>
		</Router>
	);
}

export default App;
