import React , {Component}from 'react';
import { connect } from 'react-redux';
import {setSearchField} from '../../store/actions/search';
import mainboards from '../../store/reducers/mainboards';

class SearchBox extends Component {

  render() {
      return (
        <div className='pa2 '>
          <input
            className='tc pa3 ba b--green bg-lightest-blue'
            type='search'
            placeholder='search mainboards'
            onChange={this.props.onSearchChange}
          />
        </div>
      );
  }
}

let mainboardsList=[];

const mapStateToProps = state => {
  mainboardsList = state.mainboards.mainboards;
  return {
    searchField: state.searchField ,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value,mainboardsList))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBox);