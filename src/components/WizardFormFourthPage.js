import React, {Component, PropTypes} from 'react';
import {reduxForm} from 'redux-form';
export const fields = ['decade_pref'];
import { Link } from 'react-router';

const validate = values => {
  const errors = {};
  // TODO: Handle edge case where user deselects all
  if (!values.decade_pref) {
    errors.decade_pref = 'Please select at least one decade or "Any".';
  }
  return errors;
};

class WizardFormFourthPage extends Component {
  static propTypes = {
    fields: PropTypes.object.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    previousPage: PropTypes.func.isRequired
  };

  render() {
    const {
      fields: {decade_pref},
      handleSubmit,
      previousPage
      } = this.props;

    return (
      <form onSubmit={handleSubmit}>
        <h3>Just a couple more questions...</h3>

        <div className={`form-group ${decade_pref.touched && decade_pref.invalid? 'has-danger' : ''}`}>
          <label>Decade preference:</label>
          <div>
            <select multiple {...decade_pref} value={decade_pref.value || ["Any"]}>
              <option value="Any">Any</option>
              <option value="pre 70s">Pre 70s</option>
              <option value="70s">70s</option>
              <option value="80s">80s</option>
              <option value="90s">90s</option>
              <option value="2000 onwards">2000 onwards</option>
            </select>
          </div>
          <div className="text-help">
          {decade_pref.touched && decade_pref.error && <div>{decade_pref.error}</div>}
          </div>
          <small>Hold down the Ctrl (windows) / Command (Mac) button to select multiple options.</small>
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
})(WizardFormFourthPage);
