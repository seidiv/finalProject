import React, { Component } from 'react';

class Scroll extends Component {
    render() {
        return (
            <div>
                <div style={{margin: 'auto', overflow: 'scroll', border: '5px solid black', height: '800px' , width:'1450px'}}>
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default Scroll;