import React from 'react';
import { Link } from "react-router-dom";
import  Footer  from './footer';

export default class Intineraries extends React.Component {
    render() {
        return (
        <div>
            <h1>Barcelona</h1>
            <h3>Available MYtineraries: </h3>
            <Itinerary />
            <Link to="./cities">Choose another citiy</Link>
            <Footer/>
        </div>
        )
    }
};