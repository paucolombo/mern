import React from 'react';

export default class Cities extends React.Component {
    constructor() {
        super()
        this.state = {
            cities: [],
            isFetching: false
        }
        this.createCityList= this.createCityList.bind(this);
    }

    render() {
        console.log("state ", this.state);
        return (
            <div>
            <h1>Cities</h1>
            {this.createCityList(this.state.cities)}
            </div>
            );
            
    }
    componentDidMount() {
        this.fetchCities()
    }
createCityList (cities) {
    return cities.map((city) =>
    <li className="listCities" key={city._id}>
        {city.city}
    </li>
    )
}

    fetchCities = () => {
        this.setState({ ...this.state, isFetching: true })
        fetch("http://localhost:5000/getAllCities")
            .then(response => response.json())
            .then(result => this.setState({
                cities: result,
                isFetching: false
            }))
            .catch(e => console.log(e));
    }
};
