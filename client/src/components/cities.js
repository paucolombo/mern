import React from 'react';
import { connect } from "react-redux";
import { fetchCities } from "../store/actions/cityActions.js";
import Intineraries from './Itineraries';
import './itineraries.css';

class Cities extends React.Component {
    constructor() {
        super()
        this.state = {
            isFetching: false,
            cityFilter: "",
            citySelected: '',
        }
        this.createCityList = this.createCityList.bind(this);
        this.onSelectCity = this.onSelectCity.bind(this);
        this.backCity = this.backCity.bind(this);
    }
    handleChange = (e) => {
        this.setState({
            cityFilter: e.target.value
        })
    }

    render() {
        if(this.state.citySelected==="") {
            return (
                <div>
                    <h1>Cities</h1>
                    <input type="text" id="filter"
                        value={this.state.cityFilter}
                        onChange={this.handleChange} />
                   <div className="listCities">
                   <ul>
                    {this.createCityList(this.props.cities)}
                    </ul>
                    </div>
                </div>
            );
        } else {
            return (
                <Intineraries backCity={this.backCity} city={this.state.citySelected}/>    
            )
        }
        

    }
    backCity() {
        this.setState({
            citySelected: '',
        })
    }
    componentDidMount() {
        this.props.fetchData()
    }
    createCityList(cities) {
        const _cities = cities.filter(city => {
            return city.city.toLowerCase().indexOf(this.state.cityFilter.toLowerCase()) !== -1
        })
        return _cities.map((city) =>
            <li onClick={() => this.onSelectCity(city.city)} key={city._id}>
                {city.city}
            </li>
        )
    }

    onSelectCity(e) {
        this.setState({
            citySelected: e
        })
    }
};
const mapStateToProps = (state, ownProps) => {
    return {
        cities: state.citiesReducer.cities
    }
};
const mapDispatchToProps = (dispatch) => (
    {
     fetchData: () => dispatch(fetchCities())
    }
);
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Cities);
