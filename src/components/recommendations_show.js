import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetchRecommendation, deleteRecommendation } from '../actions/index';
import { Link } from 'react-router';

class RecommendationsShow extends Component {
  static contextTypes = {
    router: PropTypes.object
  };

  componentWillMount() {
    this.props.fetchRecommendation(this.props.params.id);
  }

  onDeleteClick() {
    this.props.deleteRecommendation(this.props.params.id)
    .then(() => {
      this.context.router.push('/recommendations');
    });
  }

  render() {
    const { recommendation } = this.props;

    if (!recommendation) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <h1>Watch This!</h1>
        <h2><a href={`http://localhost:8080/films/${recommendation.winning_id}`}><strong>{recommendation.winning_title}</strong></a></h2>
        <hr />
        <h6><strong>Genre preference:</strong> {recommendation.genres_pref}</h6>
        <h6><strong>Rating preference:</strong> {recommendation.rating_pref}</h6>
        <h6><strong>Director preference:</strong> {recommendation.director_pref}</h6>
        <h6><strong>Decade preference:</strong> {recommendation.decade_pref.join(', ')}</h6>
        <h6><strong>Stars preference:</strong> {recommendation.stars_pref}</h6>
        <h6><strong>Keywords preference:</strong> {recommendation.keywords_pref}</h6>
        <button type="button" className="btn btn-none pull-right" onClick={this.onDeleteClick.bind(this)}>
          <img className="icon" alt="Delete" src="../style/images/trash.svg" />
        </button>
        <Link to="/recommendations">Back to recommendations</Link>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { recommendation: state.recommendations.recommendation };
}

export default connect(mapStateToProps, { fetchRecommendation, deleteRecommendation })(RecommendationsShow);
