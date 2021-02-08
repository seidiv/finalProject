import React, { Component } from "react";

class SensorTypeCard extends Component {
    render() {
        return (
            <div className="tc grow bg-light-green br4 pa5 ma2 dib bw3 shadow-5">
                <h1>Type ID</h1>
                <h2>{this.props.id}</h2>
                <h4>description</h4>
                <h1>{this.props.description}</h1>
            </div>
        );
    }
}

export default SensorTypeCard;
