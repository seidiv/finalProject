import React, { Component, Fragment } from "react";
import Chart from "./Chart";
import Scroll from "../layout/scroll";
class Table extends Component {
    render() {
        return (
            <div className="container card card-body mt-3">
                <Scroll>
                    <Chart />
                </Scroll>
            </div>
        );
    }
}

export default Table;
