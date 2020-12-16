import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { AccountsContextProvider } from './context/AccountsContext';
import Details from "./routes/Details"
import Home from "./routes/Home"
import Landing from './routes/Landing';
import Signin from './routes/Signin';
import Register from './routes/Register';
import Updates from "./routes/Updates"


export default class App extends Component {
  render() {
    return (
      <AccountsContextProvider>
      <div className="container">
        <Router>
          <Route exact path="/" component={Landing}/>
          <Route exact path="/join" component={Register}/>
          <Route exact path="/signin" component={Signin}/>
          <Route exact path="/home" component={Home}/>
          <Route exact path="/passwords/:website" component={Details}/>
          <Route exact path="/passwords/:id/update" component={Updates}/>
        </Router>
      </div>
      </AccountsContextProvider>
    )
  }
}
