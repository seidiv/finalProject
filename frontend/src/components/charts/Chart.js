import React, { Component } from "react";
import { Bar, Line, Pie } from "react-chartjs-2";

class Chart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chartData: {},
        };
    }
    render() {
        return (
            <div className="chart">
                <Bar />
            </div>
        );
    }
}

export default Chart;
