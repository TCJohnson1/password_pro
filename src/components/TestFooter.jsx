import React, { Component } from 'react'

export default class TestFooter extends Component {
      render() {
            return (
                  <footer class="footer mt-auto py-3 bg-light text-center">
                        <div class="container">
                              <h5>About</h5>
                              <span class="text-muted">Password Pro was created as a capstone project for General
                              Assembly's Software Engineering Immersive program. Password Pro is a fullstack password management application created using Postgresql, Express, React and Nodejs.</span>
                        </div>
                        <div class="container">
                              <span class="text-muted"> <a href="https://www.linkedin.com/in/terrence-c-johnson2/">
                              Terrence Johnson
                              </a>
                              </span>
                        </div>
                  </footer>
            )
      }
}
