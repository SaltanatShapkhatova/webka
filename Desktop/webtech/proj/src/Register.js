import React, { Component } from 'react';
import CategoryItem from './CategoryItem';
import ContentView from './ContentView';
import Login from './Login';
import './Register.css';


class Register extends Component {
    constructor(){
super();
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
			<button className="ui inverted blue button" id="btnreg"   onClick={this.handleClick} >Register</button>
 {this.state.popupVisible && (
          <div
            className="popover"
          >
           <div>
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

         <div class="field">
          <div class="ui left icon input">
            <i class="lock icon"></i>
            <input type="password" name="password" placeholder="Confirm password"/>  
          </div>
        </div>

        <div class="ui fluid large inverted blue submit button">Register</div>
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

export default Register;

