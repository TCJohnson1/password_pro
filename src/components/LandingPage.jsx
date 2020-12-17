import React, { Component } from 'react'

export default class LandingPage extends Component {
      render() {
            return (
                  <div class="d-flex h-100 text-center text-white bg-dark">
                        <div class="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
                              <header class="mb-auto">
                              <div>
                                    <h3 class="float-md-start mb-0">PasswordPro</h3>
                                    <nav class="nav nav-masthead justify-content-center float-md-end">
                                          <a class="nav-link active" aria-current="page" href="/signin">Signin</a>
                                          <a class="nav-link" href="https://www.linkedin.com/in/terrence-c-johnson2/">Contact</a>
                                    </nav>
                              </div>
                              </header>

                              <main class="px-3">
                                    <h1>Password Pro</h1>
                                          <p class="lead">PasswordPro was created as a capstone project for General
                                          Assembly's Software Engineering Immersive program. PasswordPro is a fullstack password management application created using Postgresql, Express, React and Nodejs.</p>
                                          <p class="lead">
                                          <a href="/join" class="btn btn-secondary btn-lg">Create Account</a>
                                          </p>
                              </main>
                              <footer class="mt-auto text-white-50">
                                    <p>PasswordPro was built by <a href="https://www.linkedin.com/in/terrence-c-johnson2/" class="text-white">Terrence Johnson</a>
                                    </p>
                              </footer>
                        </div>
                  </div>
            )
      }
}
