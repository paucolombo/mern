import React from 'react';
import './link.css';
import './content.css';

export default class Links extends React.Component {
    render() {
        return(
        <div className="content">
             <a href="#"><img className="responsiveImg" src='./img/right.png' /></a>
            <h4>Want to build your own MYtinerary?</h4>
            <ul> <li><a href="#">Log In</a></li>
                <li> <a href="#">Create Account</a></li>
            </ul>
        </div>
        )
    }
};