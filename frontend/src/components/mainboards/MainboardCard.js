import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

class MainboardCard extends Component {

    render() {
        return (
            <div className='tc grow bg-light-green br3 pa5 ma3 dib bw2 shadow-5'>
                 <Button variant="primary" size="lg" active>
                    Related Sensors 
                </Button><br/><br/><br/><br/><br/>
                <div>
                    <h1>UUID</h1>
                    <h4>{this.props.id}</h4><hr></hr>
                    <h5>description:</h5>
                    <p>{this.props.description}</p>
                </div>
            </div>
        );
    }
}

export default MainboardCard;