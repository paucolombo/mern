import React from 'react';
//import person from "../img/person.png";
import './itinerary.css';

export default class Itinerary extends React.Component {
    render() {
        const { rating, duration, price, hashTags, title, profilePicture} = this.props.itinerary;
        console.log('props city ', this.props);
        return (
            <div className="bigBoxItinerary">
                <div className="boxItinerary">
                <img src= {'/img/' + profilePicture} alt="user" />
                <h3>{title}</h3>
                </div>
                <ul className="listItineraries">
                    <li>Likes: {rating}</li>
                    <li>{duration} Hours</li>
                    <li>{price}</li>
                    <li>{hashTags.join(" ")}</li>
                </ul>
                <div style={{ cursor: 'pointer', paddingBottom:'1%', paddingTop:'1%'}} onClick={() => this.props.backCity()}>View All</div>
            </div>
        )
    }
};