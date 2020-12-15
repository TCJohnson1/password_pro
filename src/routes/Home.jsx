import React, { Component } from 'react'
import AccountList from '../components/AccountList'
import AddAccount from '../components/AddAccount'
import Footer from '../components/Footer'
import Header from '../components/Header'

export default class Home extends Component {
      render() {
            return (
                  <div>
                        <Header />
                        <AddAccount/>
                        <AccountList />
                        <Footer />
                  </div>
            )
      }
}
