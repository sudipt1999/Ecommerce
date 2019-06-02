import React, { Component } from 'react';
import {Route, Link} from 'react-router-dom';
import './App.css';
import SignIn from './components/SignIn/SignIn';
import Register from './components/Register/Register';



class App extends Component {
  render() {
    return (
        <div>
            <h1>Ecommerce App</h1>
            <h2>Comming Soon</h2>
            <ul>
              <li><Link to="/signin">SignIN</Link></li>
              <li><Link to="/register">Register</Link></li>
            </ul>
          <Route path="/signin" exact component={SignIn} />
          <Route path="/register" exact component={Register} />
        </div>
    );
  }
}

export default App;
