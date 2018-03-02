import React, { Component } from 'react';
import './MovieInfo.css'

class MovieInfo extends Component {

  constructor(props){
    super(props);
    this.state = {
      commentText: '',
      comments: [{id: 0, text: 'best movie I have ever seen!'}],
      nextId: 0
    };
    this.handleInput = this.handleInput.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleInput(e){
    this.setState({commentText: e.target.value});
  }

  handleClick(e){
    let comments = this.state.comments.slice();
    comments.push({id: this.state.nextId, text: this.state.commentText});
    this.setState({
      comments: comments,
      nextId: ++this.state.nextId,
      commentText: ''
    });

  }

  render() {
    var items = this.state.comments.map((comment, index) =>
      <li key={index}>
      <label>Guest: {comment.text}</label>
      </li>
    )
    console.log(items);
    return (

      <div className= "card">
        <p className="name">{this.props.movie.name}</p>
        <img className="img" alt = "img" src={this.props.movie.img}/>
        <p className="name">{this.props.movie.description}</p>
        <p className="name">{this.props.movie.year}</p>
        <div className = "comments">
          <ul><p className="name"> {items} </p></ul>
          <p className="comment_text">Leave comment here</p>
          <textarea className="textArea" value = {this.state.commentText} onChange = {this.handleInput}/>
          <input id="submitButton" className="ui inverted blue button" type = "submit" value = "submit"onClick = {this.handleClick}/>
        </div>
      </div>
    );
  }
}

export default MovieInfo;
