import React from "react";
import "./Card.css";
import { NavLink } from "react-router-dom";

const Card = props => {
  return (
    <div className="card-wrapper">
      <div className="movie-img">
        <img alt="poster" src={"https://image.tmdb.org/t/p/w500" + props.img} />
      </div>
      <div className="card-info-wrapper">
        <NavLink to={"/singlemovie/" + props.id} className="link" data={props}>
          {props.title}
        </NavLink>
        <p>{props.genres}</p>
        <div className="footer-card">
          <p>{props.vote_average}</p>
          <p>{props.release_date}</p>
        </div>
      </div>
    </div>
  );
};
export default Card;
