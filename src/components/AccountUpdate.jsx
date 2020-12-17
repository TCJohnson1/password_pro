import React, { useContext, useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import PasswordPro from '../api/PasswordPro';
import { AccountsContext } from '../context/AccountsContext';


const AccountUpdate = (props) => {
      const {id} = useParams();
      let history = useHistory()
      const {passwords} = useContext(AccountsContext)
      const [website, setWebsite] = useState("");
      const [username, setUsername] = useState("");
      const [email, setEmail] = useState("");
      const [password, setPassword] = useState("");

      useEffect(() => {
            const fetchData = async() => {
                  const response = await PasswordPro.get(`/${id}`);
                  console.log(response.data.data);
                  // setWebsite(response.data.data.password.website);
                  // setUsername(response.data.data.password.username);
                  // setEmail(response.data.data.password.email);
                  // setPassword(response.data.data.password.password);
            }
            fetchData()
      }, []);

      const handleSubmit = async (e) => {
            e.preventDefault()
            const accountUpdated = await PasswordPro.put(`/${id}`, {
                  website,
                  username,
                  email,
                  password,
            })
            history.push("/home")
      }

      return (
            <div>
                  <form action="">
                        <div>
                              <label for="colFormLabelSm" 
                              class="col-sm-2 col-form-label col-form-label-sm">Account:</label>
                              <input type="text"
                                    value={website} onChange={e => setWebsite(e.target.value)} 
                                    class="form-control form-control-sm" 
                                    id="colFormLabelSm" 
                                    placeholder="Account"/>
                              </div>

                              <div>
                              <label for="colFormLabelSm" 
                              class="col-sm-2 col-form-label col-form-label-sm">Username:</label>
                              <input type="text"
                                    value={username} onChange={e => setUsername(e.target.value)}
                                    class="form-control form-control-sm" 
                                    id="colFormLabelSm" 
                                    placeholder="Username"/>
                              </div>

                              <div>
                              <label for="colFormLabelSm" 
                              class="col-sm-2 col-form-label col-form-label-sm">Email:</label>
                              <input type="text" 
                                    value={email} onChange={e => setEmail(e.target.value)}
                                    class="form-control form-control-sm" 
                                    id="colFormLabelSm" 
                                    placeholder="Email"/>
                              </div>

                              <div>
                              <label for="colFormLabelSm" 
                              class="col-sm-2 col-form-label col-form-label-sm">Password:</label>
                              <input type="text"
                                    value={password} onChange={e => setPassword(e.target.value)}
                                    class="form-control form-control-sm" 
                                    id="colFormLabelSm" 
                                    placeholder="Password"/>
                              </div>
                              <br/>
                              <div class="text-center">
                                    <button onClick={handleSubmit} type="submit" class="btn btn-success btn-sm">Update Entry</button>
                              </div>
                  </form>
            </div>
      )
}

export default AccountUpdate