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
      }

      render() {
            return (
                  <div>
                        <h1>Create an Account</h1>
                  </div>
            )
      }
}
