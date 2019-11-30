import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import { Home } from './components/Home';
import { Detail } from './components/Detail';
import { NotFound } from './components/NotFound';
import './App.css';

class App extends Component {
	render(){
		return (
		    <div className="App">
		    	<Switch>
		    		<Route exact path='/' component={Home} />
		    		<Route path='/detalle/:id' component={Detail} />
		    		<Route component={NotFound} />
		    	</Switch>
		    </div>
		)
	}
}

export default App;