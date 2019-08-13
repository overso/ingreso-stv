import React from "react";

const Genres = props => {
    return (
        <div className="genresContainer">
            Género: {props.genres.map(genre => (
                <span key={genre.id}>{genre.desc}</span>
            ))}
        </div>
    )
}

export default Genres;