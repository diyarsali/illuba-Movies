import React from "react";
import CardList from "../CardList";
import "../Card.css";
import CircularProgress from "@material-ui/core/CircularProgress";

const ResultSearch = props => {
  if (props.movie.length === 0) {
    return (
      <div className="loading-circul">
        <CircularProgress size={50} />
      </div>
    );
  }
  return (
    <div>
      <h2 className="most-popular"> Your Result</h2>
      <CardList movies={props.movie} />
    </div>
  );
};
export default ResultSearch;
