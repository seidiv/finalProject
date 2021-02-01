import React , {Component}from 'react';
import { connect } from 'react-redux';
import {setSearchField} from '../../store/actions/search';
import mainboards from '../../store/reducers/mainboards';

let objectList = [];

class SearchBox extends Component {

  componentDidMount(){
    objectList = this.props.objectList;
  }
  render() {
      return (
        <div className='pa2 '>
          <input
            className='tc pa3 ba b--green bg-lightest-blue'
            type='search'
            placeholder='search by description'
            onChange={this.props.onSearchChange}
          />
        </div>
      );
  }
}


const mapStateToProps = state => {
  return {
    searchField: state.searchField ,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value,objectList))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBox);