import React, { useState, useEffect } from 'react';
import Movie from './Movie';

const Main = () => {
    const [movies, setMovies] = useState([])
    useEffect(() => {
        fetch('./movie.json').then(res => res.json()).then(data => setMovies(data))
    }, [])
    return (
        <div>
            {movies.map(movie => <Movie key={movie._id} movie={movie}/>)}
        </div>
    );
};

export default Main;