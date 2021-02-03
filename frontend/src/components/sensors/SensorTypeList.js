import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import SearchBox from "../layout/SearchBox";
import Scroll from "../layout/scroll";
import SensorTypeCard from "./SensorTypeCard";
import { getSensorTypes } from "../../store/actions/sensorTypes";

class SensorTypeList extends Component {

    componentWillMount() {
        this.props.getSensorTypes();
        console.log(this.props.sensorTypes);
    }
    render() {
        let { sensorTypes, filteredSensors } = this.props;
        if (filteredSensors === undefined) filteredSensors = sensorTypes;

        return !sensorTypes.length ? (
            <h1>Loading</h1>
        ) : (
            <Fragment>
                <SearchBox objectList={this.props.sensorTypes} />

                <Scroll className="tc">
                    <div>
                        {filteredSensors.map((st, i) => {
                            return (
                                <SensorTypeCard
                                    key={i}
                                    id={st.id}
                                    description={st.description}
                                />
                            );
                        })}
                    </div>
                </Scroll>
            </Fragment>
        );
    }
}

const mapStateToProps = (state) => ({
    sensorTypes: state.sensorTypes.sensorTypes,
    filteredSensors: state.searchObjects.filteredObjects,
});

export default connect(mapStateToProps, { getSensorTypes })(SensorTypeList);
