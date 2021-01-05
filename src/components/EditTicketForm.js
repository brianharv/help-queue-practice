import React from 'react';
import ReusableForm from './ReusableForm';
import PropTypes from 'prop-types';

const EditTicketForm = props => {
  const { ticket, onEditTicket } = props;

  function  handleEditTicketFormSubmission(event) {
    event.preventDefault();
    onEditTicket({
      names: event.target.names.value,
      location: event.target.location.value,
      issue: event.target.issue.value,
      id: ticket.id
    });
  }

  return (
    <React.Fragment>
      <ReusableForm 
        buttonText = "Edit Ticket"
        formSubmissionHandler={handleEditTicketFormSubmission}
      />
    </React.Fragment>
  )
}

EditTicketForm.propTypes = {
  ticket: PropTypes.object,
  onEditTicket: PropTypes.func
}

export default EditTicketForm;
