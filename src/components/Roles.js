import React from "react";
import Talent from "./Talent";

const Roles = props => {
    return (
        <div className="rolesContainer">
            {props.roles.map(rol => (
                <Talent key={rol.id} name={rol.desc} talents={rol.talents.talent} />
            ))}
        </div>
    )
}

export default Roles;
