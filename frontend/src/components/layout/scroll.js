import React, { Component } from 'react';

class Scroll extends Component {
    render() {
        return (
            <div>
                <div style={{margin: 'auto', overflow: 'scroll', border: '5px solid black', height: '782px' }}>
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default Scroll;