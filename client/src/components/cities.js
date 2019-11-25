import React from 'react';
import { connect } from "react-redux";
import { fetchCities } from "../store/actions/cityActions.js";

class Cities extends React.Component {
    constructor() {
        super()
        this.state = {
            isFetching: false,
            cityFilter: ""
        }
        this.createCityList = this.createCityList.bind(this);
    }
    handleChange = (e) => {
        this.setState({
            cityFilter: e.target.value
        })
    }

    render() {
        return (
            <div>
                <h1>Cities</h1>
                <input type="text" id="filter"
                    value={this.state.cityFilter}
                    onChange={this.handleChange} />
                {this.createCityList(this.props.cities)}
            </div>
        );

    }
    componentDidMount() {
        this.props.fetchData()
    }
    createCityList(cities) {
        const _cities = cities.filter(city => {
            return city.city.toLowerCase().indexOf(this.state.cityFilter.toLowerCase()) !== -1
        })
        return _cities.map((city) =>
            <li className="listCities" key={city._id}>
                {city.city}
            </li>
        )
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
