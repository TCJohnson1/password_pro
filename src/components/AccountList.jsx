import React, { useEffect, useContext} from 'react'
import PasswordPro from "../api/PasswordPro"
import { AccountsContext } from '../context/AccountsContext'
import {useHistory} from 'react-router-dom'


const AccountList = (props) => {
      const {passwords, setPasswords} = useContext(AccountsContext)
      let history = useHistory()
      useEffect(() => {
            const fetchData = async () => {
                  try{
                        const response = await PasswordPro.get("/")
                        console.log("response", response)
                        setPasswords(response.data.data.passwords);
                  } catch (err) {}
            }
            fetchData()
      },[])

      const handleDelete= async (id) => {
            try {
                  const response = await PasswordPro.delete(`/${id}`)
                  setPasswords(passwords.filter(password => {
                        return password.id !== id
                  }))
            }catch (err) {
                  console.log(err)
            }
      }

      const handleUpdate = async (id) => {
            history.push(`/passwords/${id}/update`)
      }
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
                              {passwords && passwords.map((password) => {
                                    return(
                                          <tr key={password.id}> 
                                          <td>{password.website}</td>
                                          <td>{password.username}</td>
                                          <td>{password.email}</td>
                                          <td>{password.password}</td>
                                          <td>
                                                <button onClick={()=> handleUpdate(password.id)}className="btn btn-secondary">Update</button>
                                          </td>
                                          <td>
                                                <button onClick={() => handleDelete(password.id)} className="btn btn-danger">Delete</button>
                                          </td>
                                    </tr>
                                    );
                                    })}
                              </tbody>
                        </table>
                  </div>
            )
      }

      export default AccountList