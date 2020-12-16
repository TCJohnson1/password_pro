import React, { Component } from 'react'

export default class TestHeader extends Component {
      render() {
            return (
                  <header>
                  <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark" >
                        <div class="container-fluid">
                              <a class="navbar-brand" href="/home">Password Pro</a>
                              <div class="collapse navbar-collapse" id="navbarCollapse">
                              <ul class="navbar-nav me-auto mb-2 mb-md-0">
                                    <li class="nav-item active" >
                                          <a class="nav-link" aria-current="page" href="/">Home</a>
                                    </li>
                                    <li class="nav-item">
                                    <a class="nav-link" href="/signin">Signin</a>
                                    </li>
                              </ul>
                              <ul class="d-flex">
                                    <li class="nav-item">
                                    <a class="nav-link" href="/join">Sign up</a>
                                    </li>
                              </ul>
                              </div>
                        </div>
                  </nav>
                  <br/>
                  <br/>
                  </header>
            )
      }
}
