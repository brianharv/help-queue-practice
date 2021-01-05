import React from 'react';
import PropTypes from 'prop-types';

const ReusableForm = props => {
  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
        <input
          type="text"
          placeholder='Pair Names'
          name="names"
        />
        <input 
          type='text'
          name='location'
          placeholder='Location'
        />
        <textarea
          name='issue'
          placeholder='Describe Your Issue'
        />
        <button type='submit'> {props.buttonText} </button>  
      </form>
    </React.Fragment>
  )
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
}

export default ReusableForm;