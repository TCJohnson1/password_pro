import React, { Component } from 'react'
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom"

export default class Header extends Component {
      
      render() {
            return (
                  <div className="page-header">
                  <div className="container">
                        <div className="row">
                        <h1>Password Pro</h1>
                        </div>
                  </div>
                  </div>
            )
      }
}
