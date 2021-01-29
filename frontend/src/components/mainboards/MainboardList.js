import React, { Component } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import {getMainboards} from '../../store/actions/mainboards';
import MainboardCard from './MainboardCard';
import SearchBox from '../layout/SearchBox';
import Scroll from './scroll';
import mainboards from '../../store/reducers/mainboards';

class MainboardList extends Component {
//     constructor() {
//     super()
//     this.state = {
//         filteredObjects = [],
//     }
//   }
    static propTypes = {
        leads : propTypes.array.isRequired
    }

    componentDidMount(){
        this.props.getMainboards();
        console.log(this.props.mainboards);
    }
    render() {
        let {mainboards , filteredMainboards} = this.props;
        if(filteredMainboards === undefined)
            filteredMainboards = mainboards
        
        return !mainboards.length ? <h1>Loading</h1> :
        (
                <Scroll className='tc'>
                    <div>
                        {
                            filteredMainboards.map((mb, i) => {
                                return (
                                    <MainboardCard
                                        key={i}
                                        id={mb.id}
                                        description={mb.description}
                                    />
                                );
                            }) 
                        }
                    </div>
                </Scroll>
            );
    }
}

const mapStateToProps = state => ({
    mainboards: state.mainboards.mainboards,
    filteredMainboards: state.searchObjects.filteredObjects
});


export default connect(mapStateToProps , {getMainboards})(MainboardList);