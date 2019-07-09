import React, { Component } from 'react';
import './Login.css';
import AuthService from '../AuthService';

class Login extends Component {
    constructor() {
        super();
        this.handleChange = this.handleChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.Auth = new AuthService();
    }
    componentWillMount() {
        if (this.Auth.loggedIn())
            this.props.history.replace('/');
    }

    render() {
        return (
            <div className="container-login">
                <div className="card-login">
                    <form className="form-login" onSubmit={this.handleFormSubmit}>
                        <span className="login-title-logo" />

                        <span className="login-title">
                            Sign In
                        </span>

                        <div className="input-login">
                            <input className="input" type="text" id="username" name="username" placeholder="Username" autoComplete="off" onChange={this.handleChange} required />
                        </div>

                        <div className="input-login">
                            <input className="input" type="password" id="password" name="password" placeholder="Password" autoComplete="off" onChange={this.handleChange} required />
                        </div>

                        <button className="btn-login" type="submit">
                            Sign In
                        </button>
                    </form>
                </div>
            </div>
        )
    }

    handleFormSubmit(e) {
        e.preventDefault();

        this.Auth.login(this.state.username, this.state.password)
            .then(res => {
                this.props.history.replace('/');
            })
            .catch(err => {
                alert(err);
            })
    }

    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value }
        )
    }
}

export default Login;