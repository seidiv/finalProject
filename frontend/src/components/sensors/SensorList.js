import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import propTypes from "prop-types";
import { getRelatedSensors } from "../../store/actions/relatedSensors";
import { getSensorTypes } from "../../store/actions/sensorTypes";
import SensorCard from "./SensorCard";
import SearchBox from "../layout/SearchBox";
import Scroll from "../layout/scroll";
import relatedSensors from "../../store/reducers/relatedSensors";

class SensorList extends Component {

    static propTypes = {
        filteredSensors: propTypes.array.isRequired,
        relatedSensors: propTypes.array.isRequired,
        relatedMainboard: propTypes.string.isRequired,
    };

    componentDidMount() {
        this.props.getRelatedSensors();
        this.props.getSensorTypes();
    }

    render() {
        let {
            filteredSensors,
            relatedSensors,
            relatedMainboard,
            sensorTypes,
        } = this.props;
        if (filteredSensors === undefined) filteredSensors = relatedSensors;
        // console.log(`this is related mainboard ${relatedMainboard}`);
        // console.log(relatedSensors);

        return !relatedSensors.length ? (
            <h1>Loading</h1>
        ) : (
            <Fragment>
                <SearchBox objectList={this.props.relatedSensors} />

                <Scroll className="tc">
                    <div>
                        {filteredSensors.map((rs, i) => {
                            return (
                                <SensorCard
                                    key={i}
                                    id={rs.id}
                                    description={rs.description}
                                    type_id={rs.type_id}
                                    relatedMainboard={relatedMainboard}
                                    sensorTypes={sensorTypes}
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
    relatedSensors: state.relatedSensors.sensors,
    relatedMainboard: state.relatedSensors.mainboardID,
    filteredSensors: state.searchObjects.filteredObjects,
    sensorTypes: state.sensorTypes.sensorTypes,
});

export default connect(mapStateToProps, { getRelatedSensors, getSensorTypes })(
    SensorList
);
