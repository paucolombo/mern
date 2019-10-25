import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import './link.css';
import './content.css';

export default class Links extends React.Component {
    render() {
        return (
            <div className="content">
              <Link to="./cities"><img className="responsiveImg" src='./img/right.png' /></Link>
                <h4>Want to build your own MYtinerary?</h4>
                <ul>
                        <li><Link to="./login">Log In </Link></li>
                        <li><Link to="./signup">Create Account</Link></li>
                </ul>
            </div>
        )
    }
};