import React from 'react';

const MovieCard = ({movie, swipe}) => {
    return (
        <div className={`movie ${swipe ? "swipe" : ""}`}>
            {movie.poster_path ? <img src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`} alt={movie.title}/> : "no image"}
        </div>
    );
};

export default MovieCard;
