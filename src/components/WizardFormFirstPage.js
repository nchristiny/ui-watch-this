import React, {Component, PropTypes} from 'react';
import {reduxForm} from 'redux-form';
export const fields = ['genres_pref'];
import { Link } from 'react-router';

const validate = values => {
  const errors = {};
  if (!values.genres_pref) {
    errors.genres_pref = 'How about "Horror"?';
  }
  return errors;
};

class WizardFormFirstPage extends Component {
  static propTypes = {
    fields: PropTypes.object.isRequired,
    handleSubmit: PropTypes.func.isRequired
  };

  render() {
    const {
      fields: {genres_pref},
      handleSubmit
    } = this.props;

    return (
      <form onSubmit={handleSubmit}>
        <h3>Create a new recommendation!</h3>

        <div className={`form-group ${genres_pref.touched && genres_pref.invalid? 'has-danger' : ''}`}>
          <label>Please tell me a couple of desired genres. </label>
          <input type="text" className="form-control" placeholder="Action, Romance ..." {...genres_pref}/>
          <div className="text-help">
            {genres_pref.touched && genres_pref.error && <div>{genres_pref.error}</div>}
          </div>
          <small>(Comma separated for multiple.)</small>
        </div>

        <div>
          <Link to="/recommendations" title="Cancel"><img className="icon" alt="Cancel" src="../style/images/cancel.svg" /></Link>
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
})(WizardFormFirstPage);
