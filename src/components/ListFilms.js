import React, { Component } from "react";
import "./listfilms.css";

import { Link } from "react-router-dom";

class ListFilms extends Component {
  render() {
    const films = this.props.films;
    return (
      <div className="list-container">
        {films.map((film, keys) => {
          return (
            <div  key={keys}>
              <div className="card">
                <img
                  width="100%"
                  src={`./img/episode${film.episode_id}.jpeg`}
                  className="card-img-top"
                  alt={film.title}
                />
                <div className="card-body">
                  <h5 className="card-title text-truncate">{film.title}</h5>
                  <p className="card-text">
                    <small className="text-muted">{`Episode Nº: ${
                      film.episode_id
                    }`}</small>
                  </p>
                  <p className="card-text">
                    <small className="text-muted">{`Relesade Date: ${
                      film.release_date
                    }`}</small>
                  </p>
                </div>
                <div className="card-footer">
                  <Link to={"/" + film.episode_id} className="button-a">
                    {"Details "} 
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default ListFilms;
