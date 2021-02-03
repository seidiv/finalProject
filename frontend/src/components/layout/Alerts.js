import React, { Component, Fragment } from "react";
import { withAlert } from "react-alert";
import { connect } from "react-redux";
import propTypes from "prop-types";

class Alerts extends Component {
    static propTypes = {
        error: propTypes.object.isRequired,
        message: propTypes.object.isRequired,
    };

    componentDidUpdate(prevProps) {
        // console.log("hello");
        const { error, alert, message } = this.props;
        if (error != prevProps.error) {
            if (error.msg.description) {
                alert.error(`description: ${error.msg.description.join()}`);
            }
            if (error.msg.non_field_errors) {
                alert.error(error.msg.non_field_errors.join());
            }
            if (error.msg.username) {
                alert.error(error.msg.username.join());
            }
        }

        if (message !== prevProps.message) {
            if (message.sensorRegistered)
                alert.success(message.sensorRegistered);

            if (message.mainboardRegistered)
                alert.success(message.mainboardRegistered);

            if (message.allFieldsAreEssential)
                alert.error(message.allFieldsAreEssential);

            if (message.mainboardNotAllowed)
                alert.error(message.mainboardNotAllowed);

            if (message.somethingWentWrong)
                alert.error(message.somethingWentWrong);

            if (message.passwordNotMatch) alert.error(message.passwordNotMatch);
        }
    }
    render() {
        return <Fragment />;
    }
}

const mapStateToProps = (state) => ({
    error: state.errors,
    message: state.messages,
});

export default connect(mapStateToProps)(withAlert()(Alerts));
