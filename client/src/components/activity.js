import React from 'react';
import './itinerary.css';
export default class Activity extends React.Component {
    render() {
        return (
        <div className="activity">
            <h2>{this.props.activity.title}</h2>
        </div>
        )
    }
};