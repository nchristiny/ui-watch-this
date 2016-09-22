import React, {Component, PropTypes} from 'react';
import {reduxForm} from 'redux-form';
export const fields = ['director_pref'];
import { Link } from 'react-router';

const validate = values => {
  const errors = {};
  if (!values.director_pref) {
    errors.director_pref = 'Try "Ed Wood".';
  }
  return errors;
};

class WizardFormThirdPage extends Component {
  static propTypes = {
    fields: PropTypes.object.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    previousPage: PropTypes.func.isRequired
  };

  render() {
    const {
      fields: {director_pref},
      handleSubmit,
      previousPage
      } = this.props;

    return (
      <form onSubmit={handleSubmit}>
        <h3>Just a few more questions!</h3>

        <div className={`form-group ${director_pref.touched && director_pref.invalid? 'has-danger' : ''}`}>
          <label>Favorite director?</label>
          <input type="text" className="form-control" placeholder="Director" {...director_pref}/>
          <div className="text-help">
            {director_pref.touched && director_pref.error && <div>{director_pref.error}</div>}
          </div>
          <small>(Just one, please.)</small>
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
  fields,                      // <------ all fields on last wizard page
  destroyOnUnmount: false,     // <------ preserve form data
  validate                     // <------ only validates the fields on this page
})(WizardFormThirdPage);
