import React, { Component } from 'react'

export default class SignForm extends Component {
      render() {
            return (
                  <div>
                        <div>
                              <h2 class="text-center">Signin</h2>
                              <form>
                                    <div>
                                    <label htmlFor="email">Email:</label>
                                    <input
                                    type="email" 
                                    name="email" 
                                    id="email" 
                                    placeholder="Email"/>
                                    </div>
                                    <div>
                                    <label htmlFor="email">Password:</label>
                                    <input
                                    type="password" 
                                    name="password" 
                                    id="password" 
                                    placeholder="Password"/>
                                    </div>
                                    <div>
                                    <input 
                                    type="submit" 
                                    value="Signin"
                                    id="signin"
                                    style={{backgroundColor: 'green', color: 'white'}}
                                    />
                                    <a class="nav-link" href="/join">Don't have an account? Register here.</a>
                                    </div>
                              </form>
                        </div>
                  </div>
            )
      }
}
