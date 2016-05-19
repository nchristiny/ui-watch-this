import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

export default class HomeIndex extends Component {

  render() {
    return (
      <div className="center jumbotron">
        <h1>Welcome!</h1>
        <h2>Get a film recommendation.</h2>
        <h2><Link to="/recommendations/new" title="Get a new recommendation"><img className="icon" alt="Get a new recommendation"src="../style/images/write.svg" /> Start</Link></h2>
      </div>
    );
  }
}
