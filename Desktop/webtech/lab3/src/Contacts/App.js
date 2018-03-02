import React, { Component } from 'react';
import List from './list';
import Header from './header';

class App extends Component {

  constructor(props){
      super(props);
      this.state = {
        contacts:  [{id: 0, name: "Camilla", phone: "8707562"},
                   {id: 1, name: "Havana", phone: "852148"},
                   {id: 2, name: "Onana", phone: "283325"}],
        curInfo:""
      }      
  };

  
  render() {
      return (
        <div className="App">
        <div className="wrapper"> 
          <Header contacts = {this.state.contacts} />
          {this.state.curInfo}
        </div>
      </div>
      );
  }
}

export default App;
