import React, { Component, Fragment } from "react";
import Header from "../components/layout/Header";
import Alerts from "../components/layout/Alerts";
import MainboardList from "../components/mainboards/MainboardList";
import { Provider as AlertProvider } from "react-alert";
import {
    HashRouter as Router,
    Route,
    Switch,
    Redirect,
} from "react-router-dom";
import AlertTemplate from "react-alert-template-basic";
import "./App.css";
import { Provider } from "react-redux";
import store from "../store/store";
import PrivateRoute from "../components/common/PrivateRoute";
import Login from "../components/accounts/Login";
import Table from "../components/charts/Table";
import RegisterMainboard from "../components/accounts/RegisterMainboard";
import { loadUser } from "../store/actions/auth";
import SensorList from "../components/sensors/SensorList";
import RegisterSensorType from "../components/accounts/RegisterSensorType";
import SensorTypeList from "../components/sensors/SensorTypeList";
// Alert options
const alertOptions = {
    timeout: 3000,
    position: "top center",
};
class App extends Component {
    componentDidMount() {
        store.dispatch(loadUser());
    }

    render() {
        return (
            <Provider store={store}>
                <AlertProvider template={AlertTemplate} {...alertOptions}>
                    <Router>
                        <div className="tc">
                            <Header />
                            <Alerts />
                            <Switch>
                                <PrivateRoute
                                    exact
                                    path="/"
                                    component={MainboardList}
                                />
                                <PrivateRoute
                                    exact
                                    path="/register-mainboard"
                                    component={RegisterMainboard}
                                />
                                <PrivateRoute
                                    exact
                                    path="/register-sensor"
                                    component={RegisterSensorType}
                                />
                                <Route exact path="/login" component={Login} />
                                <PrivateRoute
                                    exact
                                    path="/sensors"
                                    component={SensorList}
                                />
                                <PrivateRoute
                                    exact
                                    path="/typesensors"
                                    component={SensorTypeList}
                                />
                                <PrivateRoute
                                    exact
                                    path="/charts"
                                    component={Table}
                                />
                            </Switch>
                        </div>
                    </Router>
                </AlertProvider>
            </Provider>
        );
    }
}

export default App;
