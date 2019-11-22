import React from 'react';

export default class Cities extends React.Component {
    constructor() {
        super()
        this.state = {
            cities: [],
            isFetching: false,
            cityFilter:""
        }
        this.createCityList= this.createCityList.bind(this);
    }
    handleChange = (e) => {
        this.setState({
            cityFilter: e.target.value
        })
        //this.props.onChange(event.target.value)
      }

    render() {
        console.log("state ", this.state);
        return (
            <div>
            <h1>Cities</h1>
            <input type="text" id="filter" 
          value={this.state.cityFilter} 
          onChange={this.handleChange}/>
            {this.createCityList(this.state.cities)}
            </div>
            );
            
    }
    componentDidMount() {
        this.fetchCities()
    }
    createCityList (cities) {
        const _cities = cities.filter( city => {
            return city.city.toLowerCase().indexOf(this.state.cityFilter.toLowerCase()) !== -1
        })
    return _cities.map((city) =>
    <li className="listCities" key={city._id}>
        {city.city}
    </li>
    )
}

   
};