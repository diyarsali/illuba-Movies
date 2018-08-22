import React, { Component } from "react";
import Header from "../Header/Header";
import SearchBox from "./SearchBox";

class SearchComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <Header />
        <SearchBox />
      </div>
    );
  }
}

export default SearchComponent;
