import React from 'react';
import { connect } from 'react-redux';
import { fetchItineraries } from "../store/actions/itineraryActions.js";
import Itinerary from './itinerary';

class Intineraries extends React.Component {
    constructor() {
        super()
        this.state = {
            isFetching: false
        }
        this.createItineraryList = this.createItineraryList.bind(this);
    }
    
    componentDidMount() {
        this.props.fetchData(this.props.city);
    }
    createItineraryList(itinieraries) {
        if(itinieraries !== undefined){
        return itinieraries.map((itinerary,index) =>
            <Itinerary city={this.props.city} itinerary={itinerary} key={index}/>
        )} else {
            return <div />
        }
    }
    render() {
        return (
        <div>
            <h1>{this.props.city}</h1>
            <h3>Available MYtineraries: </h3>
            {this.createItineraryList(this.props.itinieraries)}
            <div style={{cursor:'pointer'}} onClick={() => this.props.backCity()}>Choose another citiy</div>
        </div>
        )
    }
};
const mapStateToProps = (state, ownProps) => {
    return {
        itinieraries: state.itinerayReducer.itineraries
    }
};
const mapDispatchToProps = (dispatch) => (
    {
     fetchData: (city) => dispatch(fetchItineraries(city))
    }
);
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Intineraries);