import React, { Component } from "react";
import { connect } from "react-redux";
import { registerNewSensor } from "../../store/actions/relatedSensors";
import SensorTypeList from "../sensors/SensorTypeList";
import { createMessage } from "../../store/actions/messages";

class RegisterNewSensor extends Component {
    state = {
        description: "",
        type_id: 0,
    };

    onSubmit = (e) => {
        e.preventDefault();

        const { description, type_id } = this.state;
        if (description == "") {
            this.props.createMessage({
                allFieldsAreEssential: "All fields should have value",
            });
        } else {
            const mainboard_id = this.props.mainboard_id;
            // console.log("here");
            // console.log(mainboard_id);
            const lead = { type_id, mainboard_id, description };
            this.props.registerNewSensor(lead);
            this.setState({
                description: "",
                type_id: 0,
            });
        }
    };

    onChange = (e) => this.setState({ [e.target.name]: e.target.value });

    render() {
        const { description, type_id } = this.state;
        return (
            <div className="container">
                <div className="col-md-6 m-auto">
                    <br />
                    <div className="card card-body mt-5">
                        <h2 className="text-center">Register Sensor</h2>
                        <form onSubmit={this.onSubmit}>
                            <div className="input-sm form-group">
                                <label>
                                    write a description(like gas sensor in room
                                    2)
                                </label>
                                <div className="form-group">
                                    <label>type id</label>
                                    <input
                                        placeholder="username"
                                        type="text"
                                        className="tc pa3 ba b--green bg-lightest-blue form-control"
                                        name="type_id"
                                        onChange={this.onChange}
                                        value={type_id}
                                    />
                                </div>
                                <div className="form-group">
                                    <label>description</label>
                                    <input
                                        type="text"
                                        className="tc pa3 ba b--green bg-lightest-blue form-control"
                                        name="description"
                                        placeholder="description"
                                        onChange={this.onChange}
                                        value={description}
                                    />
                                </div>
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
                <SensorTypeList />
            </div>
        );
    }
}
const mapStateToProps = (state) => ({
    mainboard_id: state.relatedSensors.mainboardID,
});

export default connect(mapStateToProps, { registerNewSensor, createMessage })(
    RegisterNewSensor
);
