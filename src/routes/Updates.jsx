import React, { Component } from 'react'
import AccountUpdate from '../components/AccountUpdate'
import Footer from '../components/Footer'
import Header from '../components/Header'

export default class Updates extends Component {
      render() {
            return (
                  <div>
                        <Header />
                        <h1 className="text-center"> Update Entry</h1>
                        <AccountUpdate />
                        <br/>
                        <Footer />
                  </div>
            )
      }
}
