import React, { Component } from 'react'
import TestFooter from '../components/TestFooter'
import TestHeader from '../components/TestHeader'
import SignForm from '../components/SignForm'

export default class Signin extends Component {
      render() {
            return (
                  <div>
                        <TestHeader/>
                        <br/>
                        <SignForm/>
                        <TestFooter/>
                  </div>
            )
      }
}
