import React from 'react';
import { connect } from "react-redux";
import { fetchUsers } from "../store/actions/userActions.js";
import './account.css';

class Signup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email:'', 
            password:'',
            isFetching: false,
            picture:''};
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleChange(event) {
        const target = event.target;  
        const value = target.value;
        const name = target.name;

        this.setState({
          [name]: value
        });
      }
    
      handleSubmit(event) {
        alert('You have created your account ' + this.state.name);
        event.preventDefault();
        this.props.fetchData(this.state);  
    }
    render() {
        return (
            <div className="formulario">
                <h1>Sign Up</h1>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Name: 
          <input type="text" name="name" value={this.state.name} onChange={this.handleChange} />
                    </label>
                    <label>
                        E-mail: 
          <input type="email" name="email" value={this.state.email} onChange={this.handleChange} />
                    </label>
                    <label>
                        Password: 
          <input type="password" name="password" value={this.state.value} onChange={this.handleChange} />
                    </label>
                    <label>
                        Picture: 
          <input type="text"name="picture"  value={this.state.picture} onChange={this.handleChange} />
                    </label>
                    <input className="button" type="submit" value="Submit" />
                </form>
            </div>
        )
    }
};

const mapStateToProps = (state, ownProps) => {
    return {
        user: state.usersReducer.user
    }
};
const mapDispatchToProps = (dispatch) => (
    {
     fetchData: (estado) => dispatch(fetchUsers(estado))
    }
);
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Signup);
