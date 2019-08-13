import React, { PureComponent } from "react";

export default class SearchInput extends PureComponent {

    handleChange = event => {
        this.props.textChange(event);
    };

    render() {
        return (
            <div className="searchInput">
                <span className="inputTitle">Buscar</span> <input onChange={this.handleChange} className="inputText"/>
            </div>
        );
    }
}