import React from 'react';
import Comments from './comments';
import Activity from './activity';

export default class Activities extends React.Component {
    constructor (props){
        super(props);
     this.createActivityList= this.createActivityList.bind(this);
    }
    
createActivityList(activities) {

    return activities.map((activity,index) =>
        <Activity activity={activity} key={index}/>
     )}
 
    render() {
        return (
        <div style={{display: 'grid'}}>
            <h2>Activities</h2>
            <div className="divActivities">
            {this.createActivityList(this.props.activites)}
            </div>
            <Comments/>
            <button onClick={() => this.props.closeActivity()} type="close" value="Close">Close</button>
        </div>
        )
    }
};
