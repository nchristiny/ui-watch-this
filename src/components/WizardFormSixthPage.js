import React, {Component, PropTypes} from 'react';
import {reduxForm} from 'redux-form';
export const fields = ['genres_pref', 'rating_pref', 'director_pref', 'decade_pref', 'keywords_pref', 'stars_pref'];
import { Link } from 'react-router';
import { createRecommendation } from '../actions/index';

const validate = values => {
  const errors = {};
  if (!values.stars_pref) {
    errors.stars_pref = 'Whoops, looks like we need at least one star here. How about "Warwick Davis"?';
  }
  return errors;
};

class WizardFormSixthPage extends Component {
  static propTypes = {
    fields: PropTypes.object.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    previousPage: PropTypes.func.isRequired,
    submitting: PropTypes.bool.isRequired
  };

  render() {
    const {
      fields: {stars_pref},
      handleSubmit,
      previousPage,
      submitting
      } = this.props;

    return (
      <form onSubmit={handleSubmit}>
        <h3>Last one!</h3>

        <div className={`form-group ${stars_pref.touched && stars_pref.invalid? 'has-danger' : ''}`}>
          <label>Last, let's add any actors/actresses that you might like.</label>
          <input type="text" className="form-control" placeholder="Dustin Hoffman, Helen Mirren ..." {...stars_pref}/>
          <div className="text-help">
            {stars_pref.touched && stars_pref.error && <div>{stars_pref.error}</div>}
          </div>
        </div>

        <div>
          <Link to="/recommendations" title="Cancel"><img className="icon" alt="Cancel" src="../style/images/cancel.svg" /></Link>
          <button type="button" className="btn btn-none" onClick={previousPage}>
            <img className="icon" alt="Back" src="../style/images/arrow-back.svg" />
          </button>
          <button type="submit" className="btn btn-none" disabled={submitting}>
            <img className="icon" alt="Next" src="../style/images/checkmark.svg" />
          </button>
        </div>
      </form>
    );
  }
}

export default reduxForm({
  form: 'wizard',              // <------ same form name
  fields,                      // <------ all fields on last wizard page
  destroyOnUnmount: false,     // <------ preserve form data
  validate                     // <------ only validates the fields on this page
},null, { createRecommendation })(WizardFormSixthPage);
