import React, {Component, PropTypes} from 'react';
import {reduxForm} from 'redux-form';
export const fields = ['rating_pref'];
import { Link } from 'react-router';

const validate = values => {
  const errors = {};
  if (!values.rating_pref) {
    errors.rating_pref = "Gotta choose a number.";
  }
  return errors;
};

class WizardFormSecondPage extends Component {
  static propTypes = {
    fields: PropTypes.object.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    previousPage: PropTypes.func.isRequired
  };

  render() {
    const {
      fields: {rating_pref},
      handleSubmit,
      previousPage
      } = this.props;

    return (
      <form onSubmit={handleSubmit}>
        <h3>Just a few more questions!</h3>

        <div className={`form-group ${rating_pref.touched && rating_pref.invalid? 'has-danger' : ''}`}>
          <label>Do you prefer popular or obscure, you-probably-haven't-heard-of-it types of films? </label>
          <input type="number" min="1" max="10" className="form-control" placeholder="Popularity" {...rating_pref}/>
          <div className="text-help">
            {rating_pref.touched && rating_pref.error && <div>{rating_pref.error}</div>}
          </div>
          <small>(10 being most acclaimed and 1 being most panned.)</small>
          <input type ="range" min ="1" max="10" step ="1"  {...rating_pref}/>
        </div>

        <div>
          <Link to="/recommendations" title="Cancel"><img className="icon" alt="Cancel" src="../style/images/cancel.svg" /></Link>
          <button type="button" className="btn btn-none" onClick={previousPage}>
            <img className="icon" alt="Back" src="../style/images/arrow-back.svg" />
          </button>
          <button type="submit" className="btn btn-none">
            <img className="icon" alt="Next" src="../style/images/arrow-right.svg" />
          </button>
        </div>
      </form>
    );
  }
}

export default reduxForm({
  form: 'wizard',              // <------ same form name
  fields,                      // <------ only fields on this page
  destroyOnUnmount: false,     // <------ preserve form data
  validate                     // <------ only validates the fields on this page
})(WizardFormSecondPage);
