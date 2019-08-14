import React from "react";

const TitleDetail = props => {
    return (
        <div className="titleContainer">
            <h2>{props.title}</h2>
            <span>({props.publishyear})</span>
            <span>{props.duration}</span>
            <span>{props.ratingCode}</span>
        </div>
    )
}

export default TitleDetail;