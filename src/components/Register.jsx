import React, { Component } from 'react'
import { connect } from 'react-redux'
import { validateFields } from '../utilities/validation'
import { Link } from 'react-router-dom'

export default class Register extends Component {
      state = {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            confirmPassword: '',
            loginMessage: '',
            errorMessage: '',
            isSubmitted: false
      }

      registerUser = (event) => {
            event.preventDefault();
            const { firstName, lastName, email, password,confirmPassword } = this.state

            const fieldsToValidate = [
                  {firstName},
                  {lastName},
                  {email},
                  {password},
                  {confirmPassword}
            ]

            const allFieldsEntered = validateFields(fieldsToValidate)
            if (!allFieldsEntered) {
                  this.setState({
                        errorMessage: {
                              signUpError: "Please enter all fields."
                        }
                  })
            } else {
                  if (password !== confirmPassword) {
                        this.setState({
                              errorMessage: {
                                    signUpError: "Confirm passwords."
                              }
                        })
                  } else {
                        this.setState({ isSubmitted: true})
                  }
            }
      }

      handleChange = (event) => {
            const {name, value } = event.target;
            this.setState({
                  [name]: value
            })
      }

      render() {
            const {errorMessage, loginMessage, isSubmitted} = this.state
            return (
                  <div>
                        <h1>Create an Account</h1>
                        <div className="login-form">
                        <form onSubmit={this.registerUser}>
                        {errorMessage && errorMessage.signUpError ? (
                              <p> 
                              {errorMessage.signUpError}
                              </p>
                        ) : (
                              isSubmitted && (
                                    <p>{loginMessage}</p>
                              )
                        )
                  }
                        <div className="form-group">
                              <label htmlFor="first_name">First Name</label>
                              <input
                              type="first_name"
                              name="first_name"
                              id="first_name"
                              placeholder="Enter Your First Name"
                              onChange={this.handleChange}
                              />
                        </div>
                        <div className="form-group">
                              <label htmlFor="last_name">Last Name</label>
                              <input
                              type="last_name"
                              name="last_name"
                              id="last_name"
                              placeholder="Enter Your Last Name"
                              onChange={this.handleChange}
                              />
                        </div>
                        <div className="form-group">
                              <label htmlFor="email">Email</label>
                              <input
                              type="email"
                              name="email"
                              id="email"
                              placeholder="Enter Your Email"
                              onChange={this.handleChange}
                              />
                        </div>
                        <div className="form-group">
                              <label htmlFor="password">Password</label>
                              <input
                              type="password"
                              name="password"
                              id="password"
                              placeholder="Enter Your Password"
                              onChange={this.handleChange}
                              />
                        </div>
                        <div className="form-group">
                              <label htmlFor="password">Confirm Password</label>
                              <input
                              type="password"
                              name="confirm_password"
                              id="password"
                              placeholder="Confirm Your Password"
                              onChange={this.handleChange}
                              />
                        </div>
                        <div>
                              <input 
                              type="submit" 
                              value="Register"
                              id="register"
                              />
                              <Link to="/" 
                              className="login-link">
                              Login
                              </Link>
                        </div>
                        </form>
                        </div>
                  </div>
            )
      }
}
