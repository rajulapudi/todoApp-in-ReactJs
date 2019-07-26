import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import SampleAxios from './components/SampleAxios';
import ReactLifeCycle from './components/ReactLifeCycle';
import Post from './components/Post';

class App extends Component {
	render() {
		return (
			<BrowserRouter>
				<Navbar />
				<Switch>
					<Route exact path="/" component={Home} />
					<Route path="/about" component={About} />
					<Route path="/contact" component={Contact} />
					<Route exact path="/sample" component={SampleAxios} />
					<Route exact path="/sample/:post_id" component={Post} />
					<Route
						exact
						path="/reactlifecycle"
						component={ReactLifeCycle}
					/>
				</Switch>
			</BrowserRouter>
		);
	}
}
export default App;
