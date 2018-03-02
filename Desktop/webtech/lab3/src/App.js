import React, { Component } from 'react';
import {render} from 'react-dom';
import {Link} from 'react-router-dom';
import {BrowserRouter as HashRouter, Navlink, Route} from 'react-router-dom';

import ToDo from './Todos/App.js'
import Contacts from './Contacts/App.js'
import Home from './Home/App.js'
import './App.css';

class App extends Component {
  render() {
    
    return (
      <HashRouter>
        <div className="Router"> 
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/todos">ToDo</Link></li>
            <li><Link to="/contacts">Contacts</Link></li>
          </ul>
            <Route exact path = "/" component = {Home}/>
            <Route path = "/todos" component = {ToDo}/>
            <Route path = "/contacts" component = {Contacts}/>
        </div>
      </HashRouter>
    );
  }
}

export default App;
