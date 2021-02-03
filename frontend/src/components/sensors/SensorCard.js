import React, { Component } from "react";
import { Button } from "react-bootstrap";
import { getSensorValueItem } from "../../store/actions/sensorValue";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
class SensorCard extends Component {
    render() {
        let desc = "Unknown Type";
        for (let i = 0; i < this.props.sensorTypes.length; i++) {
            if (this.props.type_id == this.props.sensorTypes[i].id) {
                desc = this.props.sensorTypes[i].description;
            }
        }
        return (
            <div className="tc grow bg-light-green br3 pa3 ma2 dib bw1 shadow-5">
                <Link to="/charts">
                    <Button
                        onClick={this.props.getSensorValueItem.bind(
                            this,
                            this.props.relatedMainboard,
                            this.props.id
                        )}
                        variant="primary"
                        size="lg"
                        active
                    >
                        see sensor values
                    </Button>
                </Link>
                <br />
                <h1>Sensor ID</h1> 
                <h4>{this.props.id}</h4>
                <br />
                <br />
                <br />
                <br />
                <div>
                    <h1>Sensor Type</h1>
                    <h4>{desc}</h4>

                    <hr></hr>

                    <h5>description:</h5>
                    <p>{this.props.description}</p>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    mainboards: state.mainboards.mainboards,
});

export default connect(mapStateToProps, { getSensorValueItem })(SensorCard);
