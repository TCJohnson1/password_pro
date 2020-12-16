import React, {useState, createContext} from 'react';

export const AccountsContext = createContext();

export const AccountsContextProvider = (props) => {
      const [passwords, setPasswords] = useState([])

      const addAccounts = (password) => {
            setPasswords([...passwords, password])
      }
      return (
            <AccountsContext.Provider value = {{passwords, setPasswords}}>
            {props.children}
            </AccountsContext.Provider>
      )
}
