import React, { PureComponent } from "react";
import MovieResultRow from "./MovieResultRow";

export default class MovieResults extends PureComponent {

    render() {
        return (
            <div className="rowContainer">
                {this.props.movies.map(movie => (
                    <MovieResultRow
                        key={movie.id}
                        image={movie.image_small}
                        title={movie.title}
                        id={movie.id}
                    />
                ))}
            </div>
        );
    }

}