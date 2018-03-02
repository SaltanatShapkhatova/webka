import React from 'react';
import './todoInputCSS.css';

export default class TodoInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.todoText,
      optionValue: 'low'
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleOptionChange = this.handleOptionChange.bind(this);
    this.addTodo = this.addTodo.bind(this);
  }

  handleChange(e) {
      this.setState({value: e.target.value});
  }

  handleOptionChange(e) {
      this.setState({optionValue: e.target.value});
  }

  addTodo(todo, option) {
    if (todo.length > 0) {
      this.props.addTodo(todo, option);
      this.setState({value: '', optionValue:''});
    }
  }

  render() {
    return (
      <div>
        <input type="text" value={this.state.value} onChange={this.handleChange} />
         <select  onChange={this.handleOptionChange} required = "true">
          <option value="high">high</option>
          <option selected value="low">low</option>
        </select> 
        <input type="submit" onClick={() => this.addTodo(this.state.value, this.state.optionValue)}/>
      </div>
    );
  }
}