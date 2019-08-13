import React from "react";

const Logo = props => {
    return (
        <img src={props.src} className="logo" alt={props.alt} />
    )
}

export default Logo;