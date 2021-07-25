import React from 'react';
import PropTypes from 'prop-types';
import './Movies.css';
 
function Movie({ year, title, summary, poster }) {
    return (
        <div clas="movie">
            <img src={poster} alt={title} title={title} />
            <div class="movie__data">
                <h3 class="movie__title">{title}</h3>
                <h3 class="movie__year">{year}</h3>
                <h3 class="movie__summary">{summary}</h3>
            </div>
        </div>
    );
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired
};

export default Movie;