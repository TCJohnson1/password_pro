import React, { Component } from 'react';
import {connect} from 'react-redux';
import { validateFields } from '../utilities/validation';
import { Link } from 'react-router-dom'
// import Header from './Header'
// import Footer from './Footer'


export default class Login extends Component {
      state = {
            email: '',
            password: '',
            errorMessage: ''
      }
      handleLogin = event => {
            event.preventDefault()
            const {email, password} = this.state
            const fieldsToValidate = [{email}, {password}]

            const allFieldsEntered = validateFields(fieldsToValidate)
            if (!allFieldsEntered){
                  this.setState({
                        errorMessage: {
                              signInError: 'Please enter all fields'
                        }
                  }) //Error is return for failure to enter fields
            }else {
                  this.setState({
                        errorMessage: {
                              signInError: ''
                        }
                  }) //Empty return for a successful login
            }
      }

      handleChange = (event) => {
            const { name, value} = event.target

            this.setState ({
                  [name]: value
            })
      }

      render() {
            const {errorMessage} = this.state;
            return (
                  <div>
                        <h1>Password Pro</h1>
                        <h3>Login</h3>
                        <div className="login-form">
                        <form onSubmit={this.handleLogin}>
                        {errorMessage && errorMessage.signInError &&(
                              <p>{errorMessage.signInError}</p>
                        )}
                        <div className="form-group">
                              <label htmlFor="email">Email:</label>
                              <input 
                              type="email" 
                              name="email" 
                              id="email" 
                              placeholder="Provide an email address"
                              onChange={this.handleChange}
                              />
                        </div>
                        <div className="form-group">
                              <label htmlFor="password">Password:</label>
                              <input
                              type="password"
                              name="password"
                              id="password"
                              placeholder="Enter your password"
                              onChange={this.handleChange}
                              />
                        </div>
                        <div>
                              <input 
                              type="submit" 
                              value="Login"
                              id="login"
                              />
                              <Link to="/register" 
                              className="register-link">
                              Create Account
                              </Link>
                        </div>
                        </form>
                        </div>
                  </div>
            )
      }
}
