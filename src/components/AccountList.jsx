import React, { Component } from 'react'

export default class AccountList extends Component {
      render() {
            return (
                  <div className="list-group">
                        <table className="table table-hover table-dark">
                              <thead>
                                    <tr>
                                          <th scope="col">Account</th>
                                          <th scope="col">Username</th>
                                          <th scope="col">Email</th>
                                          <th scope="col">Password</th>
                                          <th scope="col">Edit</th>
                                          <th scope="col">Delete</th>
                                    </tr>
                              </thead>
                              <tbody>
                                    <tr>
                                          <td>Twitter</td>
                                          <td>@TwitterName</td>
                                          <td>User@user.com</td>
                                          <td>Password</td>
                                          <td><button className="btn btn-secondary">Update</button></td>
                                          <td><button className="btn btn-danger">Delete</button></td>
                                    </tr>
                              </tbody>
                        </table>
                  </div>
            )
      }
}
