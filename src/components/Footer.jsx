import React, { Component } from 'react'

export default class Footer extends Component {
      render() {
            return (
                  <div className="footer mt-auto py-3 bg-light text-center">
                  <div className="container">
                  <div className="row">
                  <h5>About</h5>
                  <span>
                  Password Pro was created as a capstone project for General
                  Assembly's Software Engineering Immersive program. Password Pro is a fullstack password management application created using Postgresql, Express, React and Nodejs
                  </span>
                  </div>
                  <div>
                  <h5>Contact</h5>
                  <span>
                  <a href="https://www.linkedin.com/in/terrence-c-johnson2/">
                  Terrence Johnson
                  </a>
                  </span>
                  </div>
            </div>
                  </div>
            )
      }
}
