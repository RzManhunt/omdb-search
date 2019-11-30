import React, { Component } from 'react';
import PropTypes from 'prop-types';

const API_KEY = '4287ad07';

export class Detail extends Component {
	static propTypes = {
		match: PropTypes.shape({
			params: PropTypes.object,
			isExact: PropTypes.bool,
			path: PropTypes.string,
			url: PropTypes.string
		})
	}

	state = { movie: {} }

	_fetchMovie = (id) => {
		fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`)
		.then(response => response.json())
		.then(movie => {
			console.log({ movie })
			this.setState({ movie })
		})
	}

	componentDidMount(){
		const { id } = this.props.match.params
		this._fetchMovie(id)
	}
	render(){
		const {
				Actors,
				Metascore,
				Plot,
				Poster,
				Title,
				
				Director,
				Genre,
				Runtime,
				imdbRating
			} = this.state.movie
		return(	
				<div className="movie-detail">
					<div className="movie-detail-poster">
						<h1>{Title}</h1>
						<img src={Poster} alt={Title} />
					</div>
					<div className="movie-detail-info">
						<h4>Genero:</h4>
						<p>{Genre}</p>
						<h4>Duracion:</h4>
						<p>{Runtime}</p>
						<h4>Director:</h4>
						<p>{Director}</p>
						<h4>Actores:</h4>
						<p>{Actors}</p>
						<div className="ratings-inline">
							<div>
								<h4>Metascore:</h4>
								<p>{Metascore}</p>
							</div>
							<div className="imdb-rating">
								<h4>IMDb Rating:</h4>
								<p>{imdbRating}</p>
							</div>
						</div>
						<h4>Sinopsis:</h4>
						<p>{Plot}</p>
					</div>
				</div>
		)
	}
}