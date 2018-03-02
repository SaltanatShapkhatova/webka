import React, { Component } from 'react';
import Header from './header';
import TodoInput from './todoInput';
import TodoItem from './todoItem';

class App extends Component {

  constructor(props){
      super(props);
      this.state = {
        todos:  [{id: 0, text: "Make dinner tonight!",priority:"high"},
                {id: 1, text: "Fold the laundry.",priority:"low"},
                {id: 2, text: "Learn to make a React app!",priority:"low"}],
        nextId: 3,
        completed: []
      }          
      this.addTodo = this.addTodo.bind(this);
      this.removeTodo = this.removeTodo.bind(this);
      this.completed = this.completed.bind(this);
      this.updateItem = this.updateItem.bind(this);
  };

  addTodo(todoText, optionText) {
    let todos = this.state.todos.slice();
    todos.push({id: this.state.nextId, text: todoText, priority:optionText});
    this.setState({
      todos: todos,
      nextId: ++this.state.nextId
    });
  }

  removeTodo(id) {
    this.setState({
      todos: this.state.todos.filter((todo, index) => (todo.id !== id)   )   
    });
  } 

  completed(id,text,prior){
    let cur = this.state.completed.slice();
    cur.push({id:cur.id, text:text, priority:prior});
    this.setState({
      todos: this.state.todos.filter((todo, index) => (todo.id !== id)),
      completed:cur
    });
  } 
  updateItem(id, text){
    let obj = this.state.todos;
    var index = obj.findIndex ((todo) => todo.id == todo.id)
    obj[index].text = text;
    this.setState({ todos: obj, text: text});

    console.log (obj[index].text);
  }

    sortList () {
      let obj = this.state.todos;
      obj.sort (compareByPriority);
      this.setState({
        todos: obj
      });
    }

  render() {
    return (
      <div className="App">
        <div className="todo-wrapper"> 
          <Header />
          <TodoInput todoText="" optionText="" addTodo={this.addTodo} />
          <ul>
            {
              this.state.todos.map((todo) => {
                return <TodoItem todo={todo} key={todo.id} id={todo.id} updateItem={this.updateItem} removeTodo={this.removeTodo} completed={this.completed}/>
              })  
            }
          </ul>
          <h1>Completed list </h1>
         <ul>
            {
              this.state.completed.map((todo) => {
                return <TodoItem todo={todo} key={todo.id} id={todo.id} removeTodo={this.removeTodo} completed={this.completed}/>
              })  
            }
          </ul>
          <button
            className="Sort"
            onClick={() => this.sortList()}>
            By priority
          </button>
        </div>
      </div>
    );
  }
}

export default App;

function compareByPriority (a, b) {
    if (a.priority > b.priority)
      return -1;
    else if (a.priority < b.priority)
      return 1;

    return 0;
}
