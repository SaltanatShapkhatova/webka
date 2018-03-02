import React, { Component } from 'react';
import './CategoryItem.css';
import MovieInfo from './MovieInfo';

class CategoryItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      "show": false,
    };

    this.showMore = this.showMore.bind(this);
  }

  showMore(id){
  
    this.setState({
      "show": !this.state.show,
    })
  }

  render() {
    if(this.state.show) {
      return <MovieInfo movie={this.props.movie}/>;  
    } else {
      return (
        <div className = "cards">
          <div className="card1" onClick = {this.showMore}>
            <img alt = "img" src={this.props.movie.img}/>
            <p className = "name">{this.props.movie.name}</p>
          </div>
        </div>
      );
    }
  }
}
export default CategoryItem;