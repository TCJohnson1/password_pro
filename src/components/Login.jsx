import React, { Component } from 'react';
import {connect} from 'react-redux';
import { validateFields } from '../utilities/validation';
import { Link } from 'react-router-dom'


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
                  </div>
            )
      }
}
