import React, { Component } from 'react';
import CategoryItem from './CategoryItem';
import './ContentView.css';

class ContentView extends Component {

    constructor(props){
        super(props);
    }
//Link does not allow to send props
    render() {

        let filteredMovies = this.props.movies.filter(
        (movie) => {
          return movie.name.toLowerCase().indexOf(this.props.filterText.toLowerCase()) !== -1;
            }
        );

        var items = filteredMovies.map((movie) => {
          return <CategoryItem key = {movie.id}
          movie = {movie} showMore = {this.showMore}/>
        });

        return(
        <ul>
        {
          items
        }
        </ul>
        );

    }
}

export default ContentView;