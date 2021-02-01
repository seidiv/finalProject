import React, { Component } from "react";
import { Button } from "react-bootstrap";
import {connect} from "react-redux";
import { Link } from "react-router-dom";
import {getRelatedSensors} from "../../store/actions/relatedSensors";

class MainboardCard extends Component {
    render() {
        return (
            <div className="tc grow bg-light-green br3 pa3 ma2 dib bw1 shadow-5">
                <Link to="/sensors">
                    <Button
                        onClick={this.props.getRelatedSensors.bind(
                            this,
                            this.props.id
                        )}
                        variant="primary"
                        size="lg"
                        active
                    >
                        Related Sensors
                    </Button>
                </Link>
                <br />
                <br />
                <br />
                <br />
                <br />
                <div>
                    <h1>UUID</h1>
                    <h5>{this.props.id}</h5>
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

export default connect(mapStateToProps,{ getRelatedSensors })(MainboardCard);
