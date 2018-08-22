import React from "react";
import CardList from "./CardList";
import Header from "./Header/Header";
import "./Card.css";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";

const styles = theme => ({
  progress: {
    margin: theme.spacing.unit * 2
  }
});

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }
  componentDidMount() {
    fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=549812b681fb17dce21ee24ddf6319ee&language=en-US"
    )
      .then(response => response.json())
      .then(user => this.setState({ data: user }));
  }

  render() {
    const { classes } = this.props;
    if (this.state.data.length === 0) {
      return (
        <div className="loading-circul">
          <CircularProgress className={classes.progress} size={50} />
        </div>
      );
    }
    return (
      <div>
        <Header SearchMovieByName={this.SearchMovieByName} />
        <h2 className="most-popular"> Most popular</h2>
        <CardList movies={this.state.data} />
      </div>
    );
  }
}
Home.propTypes = {
  classes: PropTypes.object.isRequired
};
export default withStyles(styles)(Home);
