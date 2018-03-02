import React, { Component } from 'react';
import CategoryItem from './CategoryItem';
import ContentView from './ContentView';
import Register from './Register';
import './Login.css';

class Login extends Component {
    
  constructor(){
  super();

  this.state={
    username:'',
    password:''
  }

  this.handleClick = this.handleClick.bind(this);
    this.handleOutsideClick = this.handleOutsideClick.bind(this);
  this.state = {
      popupVisible: false
    };
  }

  handleClick() {
    if (!this.state.popupVisible) {
      // attach/remove event handler
      //document.addEventListener('click', this.handleOutsideClick, false);
    } else {
      //document.removeEventListener('click', this.handleOutsideClick, false);
    }

    this.setState(prevState => ({
       popupVisible: !prevState.popupVisible,
    }));
  }
  
  handleOutsideClick(e) {
    // ignore clicks on the component itself
    if (this.node.contains(e.target)) {
      return;
    }
    
    this.handleClick();
  }

  render() {
    return (
      <div className="container" >
        
        <button className= "ui inverted blue button" id="btnlog" 
          onClick={this.handleClick}
        >
          Login
        </button>
        {this.state.popupVisible && (
          <div
            className="popover"
          >
           <div class="ui middle aligned center aligned grid">
  <div class="column">
   

    <form action="" method="get" class="ui large form">
      <div class="ui stacked secondary  segment">
        <div class="field">
          <div class="ui left icon input">
            <i class="user icon"></i>
            <input type="text" name="email" placeholder="E-mail address"/>
          </div>
        </div>
        <div class="field">
          <div class="ui left icon input">
            <i class="lock icon"></i>
            <input type="password" name="password" placeholder="Password"/>
          </div>
        </div>
        <div class="ui fluid large inverted blue submit button">Login</div>
      </div>

     

    </form>

   
  </div>
</div>
          </div>
         )}
      </div>
    );
  }
}

 
    
     
    {
    /*
  <button className="ui inverted blue button" id="btnlog" onClick={this.handleOpenModal}>Login</button>
    <div class="ui middle aligned center aligned grid">
  <div class="column">
    <h2 class="ui image header">
      <div class="content">
        Log-in to your account
      </div>
    </h2>

    <form action="" method="get" class="ui large form">
      <div class="ui stacked secondary  segment">
        <div class="field">
          <div class="ui left icon input">
            <i class="user icon"></i>
            <input type="text" name="email" placeholder="E-mail address"/>
          </div>
        </div>
        <div class="field">
          <div class="ui left icon input">
            <i class="lock icon"></i>
            <input type="password" name="password" placeholder="Password"/>
          </div>
        </div>
        <div class="ui fluid large teal submit button">Login</div>
      </div>

      <div class="ui error message"></div>

    </form>

    <div class="ui message">
      New to us? <a href="https://s.codepen.io/voltron2112/debug/PqrEPM?">Register</a>
    </div>
  </div>
</div>*/}
 



export default Login;

