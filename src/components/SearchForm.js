import React, { Component } from 'react';

const API_KEY = '4287ad07';

export class SearchForm extends Component {
	state = { inputMovie: '' }

	_handleChange = (e) => {
		this.setState({ inputMovie: e.target.value })
	}

	_handleSubmit = (e) => {
		e.preventDefault()
		const { inputMovie } = this.state

		fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${inputMovie}`)
		.then(response => response.json())
		.then(data => {
console.log(data);
			const { Search = [] } = data
			this.props.onResults(Search)
		})
	}

	render(){
		return(
			<form className="searchform" onSubmit={this._handleSubmit}>
				<input
					onChange={this._handleChange}
					name="movie"
					className="searchform-input"
					type="text"
					placeholder="Busca peliculas, series, videojuegos..."
				/>
				<button className="searchform-button">
					Buscar
				</button>
			</form>
		)
	}
}