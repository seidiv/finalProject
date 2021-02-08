import React, { Component } from "react";
import { Bar, Line, Pie } from "react-chartjs-2";
import { connect } from "react-redux";
import axios from "axios";

class Chart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            vlaues: [],
            chartData: [],
        };
    }

    // Setup config with token - helper function
    tokenConfig = () => {
        // Get token from state
        const token = this.props.token;

        // Headers
        const config = {
            headers: {
                "Content-Type": "application/json",
            },
        };

        // If token, add to headers config
        if (token) {
            config.headers["Authorization"] = `Token ${token}`;
        }

        return config;
    };
    static defaultProps = {
        displayTitle: true,
        displayLegend: true,
        legendPosition: "right",
    };

    componentWillMount() {
        axios
            .get(
                `http://localhost:8000/api/sensors/value?mainboard_id=${this.props.mainboard_id}&sensor_id=${this.props.sensor_id}`,
                this.tokenConfig()
            )
            .then((res) => {
                this.setState({ values: res.data });
                this.getChartData();
            });
    }

    getChartData = () => {
        let sensorValues = [];
        let labelValues = [];
        for (let i = 0; i < this.state.values.length; i++) {
            sensorValues[i] = this.state.values[i].value;
            labelValues[i] = this.state.values[i].time_stamp.toString();
        }
        if (sensorValues.length > 100) {
            labelValues = labelValues.slice(
                Math.max(labelValues.length - 99, 1)
            );
            sensorValues = sensorValues.slice(
                Math.max(sensorValues.length - 99, 1)
            );
        }

        // console.log(this.props.values);
        // console.log(`lables ${labelValues}`);
        // console.log(`sensorValues ${sensorValues}`);
        this.setState({
            chartData: {
                labels: labelValues,
                datasets: [
                    {
                        label: "line chart",
                        data: sensorValues,
                        backgroundColor: [
                            "rgba(255, 99, 132, 0.6)",
                            "rgba(54, 162, 235, 0.6)",
                            "rgba(255, 206, 86, 0.6)",
                            "rgba(75, 192, 192, 0.6)",
                            "rgba(153, 102, 255, 0.6)",
                            "rgba(255, 159, 64, 0.6)",
                            "rgba(255, 99, 132, 0.6)",
                        ],
                        borderWidth: 2,
                        borderColor: "#777",
                    },
                ],
            },
        });
    };

    render() {
        return (
            <div className="chart">
                <Line
                    data={this.state.chartData}
                    options={{
                        title: {
                            display: true,
                            text: "Chart Of Sensor Values ",
                            fontSize: 25,
                        },
                        legend: {
                            display: true,
                            position: "top",
                        },
                    }}
                />
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    mainboard_id: state.sensorValueItem.mainboard_id,
    sensor_id: state.sensorValueItem.sensor_id,
    token: state.auth.token,
});

export default connect(mapStateToProps)(Chart);
