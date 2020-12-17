import React, { Component } from 'react'

export default class Signup extends Component {
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


      render() {
            return (
                  <div>
                  <h2 className="text-center">Create an Account</h2>
                        <div>
                        <form>
                        <div>
                              <label for="colFormLabelSm" 
                              class="col-sm-2 col-form-label col-form-label-sm">First Name:</label>
                              <input
                              type="text"
                              class="form-control form-control-sm" 
                              id="colFormLabelSm" 
                              placeholder="First Name"/>
                        </div>
                        
                        <div>
                              <label for="colFormLabelSm" 
                              class="col-sm-2 col-form-label col-form-label-sm">Last Name:</label>
                              <input
                              type="text"
                              class="form-control form-control-sm" 
                              id="colFormLabelSm"
                              placeholder="Last Name"/>
                        </div>

                        <div>
                              <label for="colFormLabelSm" 
                              class="col-sm-2 col-form-label col-form-label-sm">Email:</label>
                              <input
                              type="email"
                              class="form-control form-control-sm" 
                              id="colFormLabelSm"
                              placeholder="Email"/>
                        </div>

                        <div>
                              <label for="colFormLabelSm" 
                              class="col-sm-2 col-form-label col-form-label-sm">Password:</label>
                              <input
                              type="text"
                              class="form-control form-control-sm" 
                              id="colFormLabelSm"
                              placeholder="Password"/>
                        </div>

                        <div>
                              <label for="colFormLabelSm" 
                              class="col-sm-2 col-form-label col-form-label-sm">Confirm:</label>
                              <input
                              type="text"
                              class="form-control form-control-sm" 
                              id="colFormLabelSm"
                              placeholder="Confirm Password"/>
                        </div>
                              <br/>
                        <div class="text-center">
                              <button
                              class="btn btn-success btn-sm"
                              type="submit" 
                              value="Register"
                              id="register"
                              >Register</button>
                              <br></br>
                              <a to="/signin" 
                              className="login-link">
                              Already registered? Signin here.
                              </a>
                        </div>
                        </form>
                        </div>
                  </div>
            )
      }
}
