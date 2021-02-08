import React, { Component } from "react";
import { connect } from "react-redux";
import { registerSensorType } from "../../store/actions/sensorTypes";

class RegisterSensorType extends Component {
    state = {
        description: "",
    };

    onSubmit = (e) => {
        e.preventDefault();
        const { description } = this.state;
        const lead = { description };
        this.props.registerSensorType(lead);
        this.setState({
            description: "",
        });
    };

    onChange = (e) => this.setState({ [e.target.name]: e.target.value });

    render() {
        const { description } = this.state;
        return (
            <div>
                <div className="col-md-6 m-auto">
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <div className="card card-body mt-5">
                        <h2 className="text-center">Register Sensor</h2>
                        <form onSubmit={this.onSubmit}>
                            <div className="input-sm form-group">
                                <label>
                                    write a description(like gas sensor)
                                </label>
                                <input
                                    type="text"
                                    className="tc pa3 ba b--green bg-lightest-blue form-control"
                                    name="description"
                                    placeholder="description"
                                    onChange={this.onChange}
                                    value={description}
                                />
                            </div>
                            <div className="form-group">
                                <button
                                    type="submit"
                                    className="btn btn-primary"
                                >
                                    Register
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        ); 
    }
}

export default connect(null, { registerSensorType })(RegisterSensorType);
