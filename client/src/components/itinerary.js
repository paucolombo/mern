import React from 'react';
import person from "../img/person.png";
import './itinerary.css';

export default class Itinerary extends React.Component {
    render() {
        return (
            <div className="bigBoxItinerary">
                <div className="boxItinerary">
                <img src={person} alt="user" />
                <h3>Gaudi in a Day</h3>
                </div>
                <ul className="listItineraries">
                    <li>Likes</li>
                    <li>Duration</li>
                    <li>Price</li>
                    <li>Hashtags</li>
                </ul>
                <div style={{ cursor: 'pointer', paddingBottom:'1%', paddingTop:'1%'}} onClick={() => this.props.backCity()}>View All</div>
            </div>
        )
    }
};