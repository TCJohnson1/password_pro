import React, { Component } from 'react'
import TestFooter from '../components/TestFooter'
import TestHeader from '../components/TestHeader'
import Signup from '../components/Signup'

export default class Register extends Component {
      render() {
            return (
                  <div>
                        <TestHeader/>
                        <br/>
                        <Signup/>
                        <TestFooter/>
                  </div>
            )
      }
}
