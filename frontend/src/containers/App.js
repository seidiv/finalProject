import React, { Component , Fragment } from 'react';
import {connect} from 'react-redux';
import {setSearchField} from '../store/actions/search';
import Header from '../components/layout/Header';
import Alerts from '../components/layout/Alerts';
import SearchBox from '../components/layout/SearchBox';
import MainboardList from '../components/mainboards/MainboardList';
import Scroll from '../components/mainboards/scroll';
import {  Provider as AlertProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'
import './App.css';
import {Provider} from 'react-redux';
import store from '../store/store';


// Alert options
const alertOptions = {
  timeout : 3000 , 
  position : 'top center' 
}
class App extends Component {

  // componentDidMount() {
  //   fetch('http://localhost:8000/api/sensors/list')
  //     .then(response=> response.json())
  //     .then(users => console.log(users));
  // }

  render() {
    return (
      <Provider store={store}>
        <AlertProvider template={AlertTemplate}  {...alertOptions}>
          
          <div className='tc'>
            
            <Header/>
            <Alerts/> 
            <SearchBox/>
            <MainboardList/>


          </div>
        </AlertProvider>
      </Provider>
    );
  }
}

export default App;