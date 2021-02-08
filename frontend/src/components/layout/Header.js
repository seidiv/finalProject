import React, { Component } from "react";
import { Link } from "react-router-dom";
import propTypes from "prop-types";
import { connect } from "react-redux";
import { logout } from "../../store/actions/auth";

class Header extends Component {
    static propTypes = {
        auth: propTypes.object.isRequired,
        logout: propTypes.func.isRequired,
    };
    render() {
        const { isAuthenticated, user } = this.props.auth;

        const authLinks = (
            <div className="container">
                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarTogglerDemo01"
                    aria-controls="navbarTogglerDemo01"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon" />
                </button>
                <div
                    className="collapse navbar-collapse"
                    id="navbarTogglerDemo01"
                >
                    <a
                        className="navbar-brand  f4 br3 pa3 ma2 fw6 db bg-lightest-blue link hover-gray "
                        href="#"
                    >
                        Home
                    </a>
                    <span className="navbar-text mr-3">
                        <strong>
                            {user ? `Welcome ${user.username}` : ""}
                        </strong>
                    </span>
                </div>
                <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
                    <li className="nav-item">
                        <Link
                            to="/register-mainboard"
                            className="f4 br3 pa3 ma2 fw6 db bg-lightest-blue link hover-gray nav-link"
                        >
                            Register Mainboard
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            to="/register-sensor-type"
                            className="f4 br3 pa3 ma2 fw6 db bg-lightest-blue link hover-gray nav-link"
                        >
                            Register Sensor
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            to="/typesensors"
                            className="f4 br3 pa3 ma2 fw6 db bg-lightest-blue link hover-gray nav-link"
                        >
                            Sensor Types
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            to="/login"
                            className="f4 br3 pa3 ma2 fw6 db bg-lightest-blue link hover-gray nav-link"
                            onClick={this.props.logout}
                        >
                            Logout
                        </Link>
                    </li>
                </ul>
            </div>
        );
        const loginLinks = <div></div>;
        return (
            <nav
                style={{
                    background:
                        "linear-gradient(to left,rgba(7, 27, 82, 1) 0% , rgba(0, 128, 128, 1) 100%) ",
                    height: "100px",
                }}
                className="navbar navbar-expand-sm navbar-light bg-light"
            >
                {isAuthenticated ? authLinks : loginLinks}
            </nav>
        );
    }
}

const mapStateToProps = (state) => ({
    auth: state.auth,
});
export default connect(mapStateToProps, { logout })(Header);
