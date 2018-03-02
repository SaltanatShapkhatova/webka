import React from 'react';
import './header.css'

export default class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        curInfo:""
      }    
    this.showMore = this.showMore.bind(this);
    this.editPhone = this.editPhone.bind(this);
  }

  showMore(phone){
    this.setState({
      curInfo: phone
    })
  }

  editPhone(e){
    this.setState({curInfo: e.target.value});
  }


  render() {
    return (
       <div className="Wrapper" onClick = {() =>this.showMore(this.props.contact.phone)}>
        <input type="text" defaultValue = {this.props.contact.name} />
        <input type="number" value = {this.state.curInfo} onChange={(e) => {this.setState({curInfo: e.target.value})}}/>
      </div>
    );
  }
}