import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetchFilm } from '../actions/index';
import { Link } from 'react-router';

class FilmsShow extends Component {
  static contextTypes = {
    router: PropTypes.object
  };

  componentWillMount() {
    this.props.fetchFilm(this.props.params.id);
  }

  render() {
    const { film } = this.props;

    if (!film) {
      return <div>Loading...</div>;
    }

    var film_poster;
    if (film.poster_url === "Poster unavailable") {
      film_poster = <img className="film_poster right" src="../style/images/no_picture.png" />;
    } else {
      film_poster = <img className="film_poster right" src={`${film.poster_url}`} alt="film poster" />;
    }

    return (
      <div>
        <h1><strong>{film.title}</strong></h1>
        <hr />
        {film_poster}
        <h6><strong>Director:</strong> {film.director}</h6>
        <h6><strong>Year:</strong> {film.year}</h6>
        <h6><strong>Starring:</strong> {film.stars.join(', ')}</h6>
        <h6><strong>Genres:</strong> {film.genre.join(', ')}</h6>
        <h6><strong>IMDb rating:</strong> {film.rating}</h6>
        <h6><strong>Summary:</strong> {film.summary}</h6>
        <h6><strong>Keywords:</strong> {film.keywords.join(', ')}</h6>
        <a href={`${film.url}`} target="_blank"><img className="IMDb" title="External link to IMDb" src="../style/images/imdb.png" /><img className="icon shift" alt="External link to IMDb" src="../style/images/share2.svg" /></a>
        <p><Link to="/films">Back to films</Link></p>
        <p><Link to="/recommendations">Back to recommendations</Link></p>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { film: state.films.film };
}

export default connect(mapStateToProps, { fetchFilm })(FilmsShow);
