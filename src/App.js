import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import SampleAxios from './components/SampleAxios';

class App extends Component {
	render() {
		return (
			<BrowserRouter>
				<Navbar />
				<Route exact path="/" component={Home} />
				<Route exact path="/about" component={About} />
				<Route exact path="/contact" component={Contact} />
				<Route exact path="/sample" component={SampleAxios} />
			</BrowserRouter>
		);
	}
}
export default App;
