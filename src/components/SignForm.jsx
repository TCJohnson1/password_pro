import React, { Component } from 'react'

export default class SignForm extends Component {
      state = {
            email: '',
            password: '',
            errorMessage: ''
      }

      render() {
            return (
                  <div>
                        <div>
                              <h2 class="text-center">Signin</h2>
                              <form>
                                    <div>
                                          <label for="colFormLabelSm" 
                                          class="col-sm-2 col-form-label col-form-label-sm">Email:</label>
                                          <input
                                          type="text"
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
                                    <br/>
                                    <div class="text-center">
                                          <button
                                          class="btn btn-success btn-sm"
                                          type="submit" 
                                          value="Register"
                                          id="register"
                                          >Register</button>
                                          <a class="nav-link" href="/join">Don't have an account? Register here.</a>
                                    </div>
                              </form>
                        </div>
                  </div>
            )
      }
}
