import React, { Component } from 'react';
import List from './components/list';
import Header from './components/header';
import './App.css';

class App extends Component {

  constructor(props){
      super(props);
      this.state = {
        contacts:  [{id: 0, info: "Camilla 8707562"},
                {id: 1, info: "Havana 852148"},
                {id: 2, info: "Onana 283325"}],
      }      
  };
  
  render() {
      return (
        <div className="App">
        <div className="wrapper"> 
          <Header text=""  contacts = {this.state.contacts} search = {this.search}/>
          <ul>
            {
              this.state.contacts.map((contact) => {
                return <List contact={contact} key={contact.id} id={contact.id} />
              })
            }
          </ul>
        </div>
      </div>
      );
  }
}

export default App;
