import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export class Movie extends Component {
	static propTypes = {
		id: PropTypes.string,
		movie: PropTypes.object
	}

	render(){
		const { imdbID, Poster, Title, Year } = this.props.movie
		return(
			<Link to={`/detalle/${imdbID}`} className="movie-card">
				<img src={Poster} alt={Title} className="movie-img" />
				<div className="movie-info">
					<h2 className="movie-title" title={Title}>
						{Title}
					</h2>
					<div className="movie-year">
						Release year: {Year}
					</div>
				</div>
			</Link>
		)
	}
}