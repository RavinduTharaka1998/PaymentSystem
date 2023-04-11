import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Switch, Route, Link, BrowserRouter} from 'react-router-dom';

import Login from './components/cusLogin';
import Register from './components/cusRegistration';



class App extends Component{

  render() {
    return(
        <div>
                <Router>
                    <Switch>
                      <Route exact path='/' component={Login}/>
                      <Route path='/registeration' component={Register}/>
                    </Switch>
                </Router>

        </div>
    );
  }
}

export default App;