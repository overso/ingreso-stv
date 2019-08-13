import React, { PureComponent } from "react";
import { Link } from "react-router-dom";

export default class MovieResultsRow extends PureComponent {
    render() {
        return (
            <Link to={`/movies/${this.props.id}`}>
                <img alt={this.props.title} src={this.props.image} className="imgHorizontal" />
            </Link>
        );
    }
}