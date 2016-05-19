import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchRecommendations } from '../actions/index';
import { Link } from 'react-router';

class RecommendationsIndex extends Component {
  componentWillMount() {
    this.props.fetchRecommendations();
  }

  renderRecommendations() {
    return this.props.recommendations.map((recommendation) => {
      return (
        <li className="list-group-item" key={recommendation.id}>
          <Link to={"recommendations/" + recommendation.id}>
            <strong>{recommendation.winning_title}</strong>
          </Link>
        </li>
      );
    });
  }

  render() {
    return (
      <div>
        <h1>Past Recommendations</h1>

        <ul className="list-group">
          {this.renderRecommendations()}
        </ul>
        <div className="text-xs-left">
          <Link to="/films">
            See full film list
          </Link>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { recommendations: state.recommendations.all  }
}

export default connect(mapStateToProps, { fetchRecommendations })(RecommendationsIndex);

// CORS issue when trying to send request to localhost:3000/api
// “No 'Access-Control-Allow-Origin' header is present on the requested resource”
// https://developer.mozilla.org/en-US/docs/Web/HTTP/Access_control_CORS
// Implement rack-cors gem in API back-end.
