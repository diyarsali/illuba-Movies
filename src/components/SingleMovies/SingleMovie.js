import React, { Component } from "react";
import "./SingleMovie.css";
class SingleMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.match.params.id,
      movies: []
    };
  }
  componentDidMount() {
    let id = this.state.id;
    fetch(
      "https://api.themoviedb.org/3/movie/" +
        id +
        "?api_key=549812b681fb17dce21ee24ddf6319ee&language=en-US"
    )
      .then(response => response.json())
      .then(user => this.setState({ movies: user }));
  }
  render() {
    const movies = this.state.movies;
    if (movies.length === 0) {
      return <h1>empty</h1>;
    }

    const obj = [];
    obj.push(movies);
    console.log(obj);

    return (
      <div className="wrapper">
        <div className="movies-top-section">
          <img
            alt="poster"
            src={"https://image.tmdb.org/t/p/w500" + obj[0].backdrop_path}
          />
        </div>
        <div className="single-movie-info movie-content-wrapper">
          <div className="single-movie-info-name">
            <h1>{obj[0].title}</h1>
            <p>{obj[0].release_date}</p>
          </div>
          <div className="overView">
            <p>{obj[0].overview}</p>
          </div>
        </div>
      </div>
    );
  }
}
export default SingleMovie;
