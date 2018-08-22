import React from "react";
import Card from "./Card";
import { genres } from "./genres";

const CardList = ({ movies }) => {
  const CardsList = movies.results.map((movie, i) => {
    var genresTitle = getMovieGenre(movies.results[i].genre_ids);
    return (
      <Card
        key={i}
        id={movies.results[i].id}
        img={movies.results[i].poster_path}
        title={movies.results[i].title}
        genres={genresTitle}
        vote_average={movies.results[i].vote_average}
        release_date={movies.results[i].release_date}
      />
    );
  });
  return <div className="cardsList">{CardsList}</div>;
};
export default CardList;

function getMovieGenre(genre_ids) {
  let genreString = "";
  for (let i = 0; i < genre_ids.length; i++) {
    for (let j = 0; j < genres.length; j++) {
      if (genre_ids[i] === genres[j].id) {
        genreString += genres[j].name + ", ";
      }
    }
  }
  return genreString;
}
