import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { registerMainboard } from "../../store/actions/auth";
import { createMessage } from "../../store/actions/messages";

class RegisterMainboard extends Component {
    state = {
        username: "",
        email: "",
        password: "",
        password2: "",
        description: "",
    };

    static propTypes = {
        registerMainboard: PropTypes.func.isRequired,
        isAuthenticated: PropTypes.bool,
    };

    onSubmit = (e) => {
        e.preventDefault();
        const {
            username,
            email,
            password,
            password2,
            description,
        } = this.state;
        if (
            username == "" ||
            email == "" ||
            password == "" ||
            password2 == "" ||
            description == ""
        ) {
            this.props.createMessage({
                allFieldsAreEssential: "All fields should have value",
            });
        } else if (password !== password2) {
            this.props.createMessage({
                passwordNotMatch: "passwords do not match",
            });
        } else {
            const newMainboard = {
                username,
                password,
                email,
                description,
            };
            this.props.registerMainboard(newMainboard);
        }
    };

    onChange = (e) => this.setState({ [e.target.name]: e.target.value });

    render() {
        const {
            username,
            email,
            password,
            password2,
            description,
        } = this.state;

        return (
            <div>
                <div className="col-md-6 m-auto">
                    <br />
                    <br />
                    <div className="card card-body mt-5">
                        <h2 className="text-center">Register Mainboard</h2>
                        <form onSubmit={this.onSubmit}>
                            <div className="form-group">
                                <label>Username</label>
                                <input
                                    placeholder="username"
                                    type="text"
                                    className="tc pa3 ba b--green bg-lightest-blue form-control"
                                    name="username"
                                    onChange={this.onChange}
                                    value={username}
                                />
                            </div>
                            <div className="form-group lg">
                                <label>Email</label>
                                <input
                                    placeholder="email"
                                    type="email"
                                    className="tc pa3 ba b--green bg-lightest-blue form-control"
                                    name="email"
                                    onChange={this.onChange}
                                    value={email}
                                />
                            </div>
                            <div className="form-group">
                                <label>Password</label>
                                <input
                                    placeholder="password"
                                    type="password"
                                    className="tc pa3 ba b--green bg-lightest-blue form-control"
                                    name="password"
                                    onChange={this.onChange}
                                    value={password}
                                />
                            </div>
                            <div className="form-group">
                                <label>Confirm Password</label>
                                <input
                                    placeholder="confirm password"
                                    type="password"
                                    className="tc pa3 ba b--green bg-lightest-blue form-control"
                                    name="password2"
                                    onChange={this.onChange}
                                    value={password2}
                                />
                            </div>
                            <div className="tc form-group">
                                <label>description</label>
                                <input
                                    placeholder="write a few lines about it"
                                    type="text"
                                    className="tc pa3 ba b--green bg-lightest-blue form-control"
                                    name="description"
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
                            <br />
                            <br />
                            <br />
                            <br />
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}   

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { registerMainboard, createMessage })(
    RegisterMainboard
);
