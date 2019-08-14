import React from "react";
import MovieResultRow from "./MovieResultRow";

const MovieResults = props => {
    return (
        <div className="rowContainer">
            {props.movies.map(movie => (
                <MovieResultRow
                    key={movie.id}
                    image={movie.image_small}
                    title={movie.title}
                    id={movie.id}
                />
            ))}
        </div>
    )
}
export default MovieResults;