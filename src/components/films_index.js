import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchFilms } from '../actions/index';
import { Link } from 'react-router';

class FilmsIndex extends Component {
  componentWillMount() {
    this.props.fetchFilms();
  }

  renderFilms() {
    return this.props.films.map((film) => {
      return (
        <li className="list-group-item" key={film.id}>
          <Link to={"films/" + film.id}>
            <strong>{film.title}</strong>
          </Link>
        </li>
      );
    });
  }

  render() {
    return (
      <div>
        <h1>Big ol' Film List</h1>

        <ul className="list-group">
          {this.renderFilms()}
        </ul>
        <div className="text-xs-left">
          <Link to="/recommendations">
            See past recommendations
          </Link>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { films: state.films.all  }
}

export default connect(mapStateToProps, { fetchFilms })(FilmsIndex);
