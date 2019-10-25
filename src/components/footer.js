import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import './link.css';
import './content.css';

export class Footer extends React.Component {
    render() {
        return (
            <Link to="./"><img className="responsiveImg" src="./img/homeIcon.png" /></Link>
        )
    }
};