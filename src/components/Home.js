import React, { Component } from 'react';
import { Title } from './Title';
import { SearchForm } from './SearchForm';
import { MoviesList } from './MoviesList';
import { Credits } from './Credits';

export class Home extends Component {
	state = { 
		usedSearch: false,
		results: []
	}

	_handleResults = (results) => {
		this.setState({ results, usedSearch: true })
	}

	_renderResults = () => {
		const { results } = this.state

		return (
			results.length === 0
	      	? 'Sin Resultados'
	      	: <MoviesList movies={results} />
      	)
	}

	render(){
		return (
		    <div>
		      <Title>Buscador OMDB</Title>
		      <div className="searchform-wrapper">
		      	<SearchForm onResults={this._handleResults} />
		      </div>
		      {
		      	this.state.usedSearch === false
		      	? <Credits />
		      	: this._renderResults()
		      }
		    </div>
		)
	}
}