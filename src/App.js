import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Switch, Route, Link, BrowserRouter} from 'react-router-dom';

import Login from './components/cusLogin';
import Register from './components/cusRegistration';
import Profile from './components/cusProfile';
import ProfileEdit from './components/cusEditProfile';



class App extends Component{

  render() {
    return(
        <div>
                <Router>
                    <Switch>
                      <Route exact path='/' component={Login}/>
                      <Route path='/registeration' component={Register}/>
                      <Route path='/profile/:id' component={Profile}/>
                      <Route path='/cusedit/:id' component={ProfileEdit}/>
                    </Switch>
                </Router>

        </div>
    );
  }
}

export default App;