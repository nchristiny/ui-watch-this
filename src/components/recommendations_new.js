import React, {Component, PropTypes} from 'react';
import { createRecommendation } from '../actions/index';
import WizardFormFirstPage from './WizardFormFirstPage';
import WizardFormSecondPage from './WizardFormSecondPage';
import WizardFormThirdPage from './WizardFormThirdPage';
import WizardFormFourthPage from './WizardFormFourthPage';
import WizardFormFifthPage from './WizardFormFifthPage';
import WizardFormSixthPage from './WizardFormSixthPage';
import { Link } from 'react-router';
import { connect } from 'react-redux';

export default class RecommendationsNew extends Component {
  static contextTypes = {
    // onSubmit: PropTypes.func.isRequired,
    router: PropTypes.object
  };

  onSubmit(props) {
    createRecommendation(props);
    // TODO reroute to completed recommendation or winning film
    this.context.router.push('/recommendations');
  }

  constructor(props) {
    super(props);

    this.nextPage = this.nextPage.bind(this);
    this.previousPage = this.previousPage.bind(this);
  }

  state = {
    page: 1
  };

  nextPage() {
    this.setState({page: this.state.page + 1});
  }

  previousPage() {
    this.setState({page: this.state.page - 1});
  }

  render() {
    const {onSubmit} = this.props;
    const {page} = this.state;
    return (
      <div>
        {page === 1 && <WizardFormFirstPage onSubmit={this.nextPage}/>}
        {page === 2 && <WizardFormSecondPage previousPage={this.previousPage} onSubmit={this.nextPage}/>}
        {page === 3 && <WizardFormThirdPage previousPage={this.previousPage} onSubmit={this.nextPage}/>}
        {page === 4 && <WizardFormFourthPage previousPage={this.previousPage} onSubmit={this.nextPage}/>}
        {page === 5 && <WizardFormFifthPage previousPage={this.previousPage} onSubmit={this.nextPage}/>}
        {page === 6 && <WizardFormSixthPage previousPage={this.previousPage} onSubmit={this.onSubmit.bind(this)}/>}
      </div>
    );
  }
}
