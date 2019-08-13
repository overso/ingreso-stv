import React from "react";

const Talent = props => {
    return (
        <div className="talentContainer">
            {props.name}: {props.talents.map(talent => (
                <span key={talent.id} className="talent">{talent.fullname}</span>
            ))}
        </div>
    )
}

export default Talent;