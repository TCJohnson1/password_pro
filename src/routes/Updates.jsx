import React, { Component } from 'react'
import AccountUpdate from '../components/AccountUpdate'
import TestFooter from '../components/TestFooter'
import TestHeader from '../components/TestHeader'

export default class Updates extends Component {
      render() {
            return (
                  <div>
                        <TestHeader/>
                        <br/>
                        <br/>
                        <h1 className="text-center"> Update Entry</h1>
                        <AccountUpdate />
                        <br/>
                        <TestFooter/>
                  </div>
            )
      }
}
