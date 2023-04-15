import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Switch, Route, Link, BrowserRouter} from 'react-router-dom';

import Login from './components/cusLogin';
import Register from './components/cusRegistration';
import Profile from './components/cusProfile';
import ProfileEdit from './components/cusEditProfile';

import AddPayment from './components/cusAddPayment';
import ViewPayment from './components/cusViewPayment';
import EditPayment from './components/cusEditPayment';
import SearchPayment from './components/cusSearchPayment';

import AdminHome from './components/adminHome';



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
                      
                      <Route path='/addpayment/:id' component={AddPayment}/>
                      <Route path='/viewpayment/:id' component={ViewPayment}/>
                      <Route path='/editpayment/:id' component={EditPayment}/>
                      <Route path='/searchpayment/:pathParam1?/:pathParam2?' component={SearchPayment}/>


                      <Route path='/adminhome' component={AdminHome}/>
                    </Switch>
                </Router>

        </div>
    );
  }
}

export default App;