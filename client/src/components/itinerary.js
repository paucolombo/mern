import React from 'react';
import { connect } from "react-redux";
import Activities from './activities';
import './itinerary.css';
import { fetchActivities } from '../store/actions/activityAction';

class Itinerary extends React.Component {
    constructor (props){
        super(props);
        this.state = {
            isOpen: false,
    }
    this.showActivities = this.showActivities.bind(this);
}

showActivities() {
    if (this.state.isOpen===false) {
        this.props.fetchData(this.props.city, this.props.itinerary.title);
        this.setState({
            isOpen: true,
        })
        //this.props.fetchData(this.props.city);       
    }else {
        this.setState({
            isOpen: false,
        })
    }
    
}
componentDidMount() {
    this.props.fetchData(this.props.city, this.props.itinerary.title);
}
    render() {
        const { rating, duration, price, hashTags, title, profilePicture} = this.props.itinerary;
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
                {!this.state.isOpen ?
                    <div className="activeButton" style={{ cursor: 'pointer', paddingBottom:'1%', paddingTop:'1%'}} onClick={() => this.showActivities()}>View All</div>
                :
                   <Activities closeActivity={this.showActivities} activites={this.props.activities}></Activities> 
                }
                </div>
        )
    }
};

const mapStateToProps = (state, ownProps) => {
    return {
        activities: state.activitiesReducer.activities
    }
};
const mapDispatchToProps = (dispatch) => (
    {
     fetchData: (city, itinerary) => dispatch(fetchActivities(city, itinerary))
    }
);
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Itinerary);