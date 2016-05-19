import React, {Component, PropTypes} from 'react';
import {reduxForm} from 'redux-form';
export const fields = ['keywords_pref'];
import { Link } from 'react-router';

const validate = values => {
  const errors = {};
  if (!values.keywords_pref) {
    errors.keywords_pref = 'Please enter at least one keyword here, like "stupendous" or "high octane thrill ride". Go nuts.';
  }
  return errors;
};

class WizardFormFifthPage extends Component {
  static propTypes = {
    fields: PropTypes.object.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    previousPage: PropTypes.func.isRequired
  };

  render() {
    const {
      fields: {keywords_pref},
      handleSubmit,
      previousPage
      } = this.props;

    return (
      <form onSubmit={handleSubmit}>
        <h3>Just a couple more questions!</h3>

        <div className={`form-group ${keywords_pref.touched && keywords_pref.invalid? 'has-danger' : ''}`}>
          <label>Please add some (comma-separated) descriptive keywords.</label>
          <input type="text" className="form-control" placeholder="awesome, life-changing, lens flare, explosion, car chase ..." {...keywords_pref}/>
          <div className="text-help">
            {keywords_pref.touched && keywords_pref.error && <div>{keywords_pref.error}</div>}
          </div>
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
})(WizardFormFifthPage);
