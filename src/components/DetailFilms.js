import React, { Component } from 'react';
import axios from 'axios';
import "./starwarsCSS.css"
import { Link } from 'react-router-dom';

class DetailFilms extends Component {
  state = {
    film: null
  }
  componentWillMount() {
    let id = this.props.match.params.films_id;
    axios.get('https://swapi.co/api/films/' + id)
      .then(res => {
        this.setState({
          film: res.data
        })
        console.log(res)
      })
  }
  render() {
    const film = this.state.film ? (
      <React.Fragment>
      <div className="fade"></div>
      <div className="star-wars">
      <div className="crawl">
      
      <div className="title">
        <h1>{this.state.film.title}</h1>
        </div>
        <p >{this.state.film.director}</p>
        
        <p>{this.state.film.producer}</p>
        <p>Episode Nº: {this.state.film.episode_id}</p>
        <p>{this.state.film.opening_crawl}</p>
        
        <Link className="btn btn-primary btn-lg" to="/" role="button">Learn more</Link>
      </div>
      </div>
      </React.Fragment>
      
    ) : (
        <div className="spinner-border" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      )
      return (
        <div className="film-container ">
          {film}
        </div>
        
      )
  }
}

export default DetailFilms;
