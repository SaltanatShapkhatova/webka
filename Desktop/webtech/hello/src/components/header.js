import React, { Component } from 'react';
import List from './list.js'
import './header.css';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {value: ""};
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    console.log(e.target.value)
    this.setState({value: e.target.value});
  }
 
  render() {

    let filteredContacts = this.props.contacts.filter(
        (contact) => {
          return contact.info.toLowerCase().indexOf(this.state.value.toLowerCase()) !== -1
           /** || contact.phone.toLowerCase().indexOf(this.state.value.toLowerCase()) !== -1*/;
        }

      );
    var items = filteredContacts.map((contact) => {
      return <List key = {contact.id}
      contact = {contact}/>
    });

      return (
        <div>
          <input type="text" value={this.state.value} onChange={this.handleChange} />
          {items}
        </div>
      );
  }
}

export default App;
