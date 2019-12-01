import React from 'react';
import Itinerary from './itinerary';

export default class Intineraries extends React.Component {
    render() {
        return (
        <div>
            <h1>{this.props.city}</h1>
            <h3>Available MYtineraries: </h3>
            <Itinerary />
            <div style={{cursor:'pointer'}} onClick={() => this.props.backCity()}>Choose another citiy</div>
        </div>
        )
    }
};