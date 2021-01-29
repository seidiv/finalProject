import React, { Component , Fragment } from 'react';
import {withAlert} from 'react-alert';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
class Alerts extends Component {
    static propTypes = {
        error: propTypes.object.isRequired
    }
    componentDidUpdate(prevProps){
        const {error , alert} = this.props;
        if(error != prevProps.error){
            if(error.msg.name){
                alert.error('there is an error');
            }
        }
    }
  render() {
    return <Fragment />;
  }
}

const mapStateToProps = state => ({
    error: state.errors
})

export default connect(mapStateToProps)(withAlert()(Alerts));