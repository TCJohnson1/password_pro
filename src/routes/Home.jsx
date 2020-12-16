import React, { Component } from 'react'
import AccountList from '../components/AccountList'
import AddAccount from '../components/AddAccount'
import Footer from '../components/Footer'
import Header from '../components/Header'
import TestFooter from '../components/TestFooter'
import TestHeader from '../components/TestHeader'

export default class Home extends Component {
      render() {
            return (
                  <div>
                        <TestHeader />
                        <br/>
                        <br/>
                        <br/>
                        <h1 className="text-center"> New Password Entry</h1>
                        <AddAccount/>
                        <br/>
                        <AccountList/>
                        <br/>
                        <TestFooter/>
                  </div>
            )
      }
}
