import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Details from "./routes/Details"
import Home from "./routes/Home"
import Updates from "./routes/Updates"


export default class App extends Component {
  render() {
    return (
      <div className="container">
        <Router>
          <Route exact path="/" component={Home}/>
          <Route exact path="/passwords/:website" component={Details}/>
          <Route exact path="/passwords/:id/update" component={Updates}/>
        </Router>
      </div>
    )
  }
}
