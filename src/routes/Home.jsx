import React, { Component } from 'react'
import AddAccount from '../components/AddAccount'
import Footer from '../components/Footer'
import Header from '../components/Header'

export default class Home extends Component {
      render() {
            return (
                  <div>
                        <Header />
                        <AddAccount/>
                        <Footer />
                  </div>
            )
      }
}
