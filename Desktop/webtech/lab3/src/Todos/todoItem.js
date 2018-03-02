import React from 'react';
import './todoItem.css';

export default class TodoItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color:'white'
    }
    this.edit = this.edit.bind(this);
  }

  removeTodo(id) {
    this.props.removeTodo(id);
  }

  completed(id,text,prior){
    this.props.completed(id,text,prior);
    this.setState({
      color: 'green'
    })
  }

  edit(e) {
    const newVal = e.target.value;
    const id = this.props.id;
    this.props.updateItem(id, newVal);
  }

  render() {
    return (
      <div className="todoWrapper">
        <button className="removeTodo" onClick={(e)=> this.removeTodo(this.props.id) }>remove</button>
        <input type = "text" defaultValue={this.props.todo.text} onChange={this.edit}/>
        <div className = "removeTodo">{this.props.todo.priority}</div>
        <button className="removeTodo" onClick={(e)=> this.completed(this.props.id,this.props.todo.text,this.props.todo.priority)} style={{backgroundColor:this.state.color}}>Completed</button>
      </div>
    );
  }
}