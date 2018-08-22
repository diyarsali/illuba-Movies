import React, { Component } from "react";
import ResultSearch from "./ResultSearch";
import TextField from "@material-ui/core/TextField";
import "./SearchBox.css";

class SearchBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: [],
      Searchfield: ""
    };
  }
  SearchMovieByName = event => {
    this.setState({ Searchfield: event.target.value });
    let Searchfield = this.state.Searchfield;
    if (Searchfield == "") {
      return;
    } else {
      let url =
        "https://api.themoviedb.org/3/search/movie?api_key=549812b681fb17dce21ee24ddf6319ee&language=en-US&query=" +
        Searchfield +
        "&page=1&include_adult=false";
      fetch(url)
        .then(response => response.json())
        .then(user => this.setState({ movie: user }));
    }
  };

  render() {
    return (
      <div className="search-wrapper">
        <div className="search-component">
          <TextField
            id="search"
            label="Search field"
            type="search"
            margin="normal"
            onChange={this.SearchMovieByName}
          />
        </div>
        <ResultSearch movie={this.state.movie} />
      </div>
    );
  }
}

export default SearchBox;
