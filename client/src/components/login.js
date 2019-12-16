import React from 'react';
import './account.css';

export default class Login extends React.Component {
    render() {
        return (
            <div className="formulario">
                <h1>Login</h1>
                <form>
                    <label>
                        E-mail: 
          <input type="email" name="email" />
                    </label>
                    <label>
                        Password: 
          <input type="password" name="password"/>
                    </label>
                    <input className="button" type="submit" value="Submit" />
                </form>
            </div>
        )
    }
};
   