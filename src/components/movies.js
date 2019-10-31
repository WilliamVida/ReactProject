import React from 'react';
import MovieItem from './movieItem';

class Movies extends React.Component {

    render() {
        return this.props.myMovies.map((movies) => {
            // console.log({movies});
            return <MovieItem key={movies.poster} movies={movies}></MovieItem>
        });
    }
}

export default Movies;