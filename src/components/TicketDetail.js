import React from 'react';
import Ticket from './Ticket';
import PropTypes from 'prop-types';


const TicketDetail = props => {
  const { ticket, onClickingDelete, onClickingEdit } = props;
  return (
    <React.Fragment>
      <h1> Ticket Detail </h1>
      <h3> {ticket.location} - {ticket.names} </h3>
      <p><em>{ticket.issue}</em></p>
      <button type='button' onClick={() => onClickingDelete(ticket.id)}>Close Ticket</button>
      <button type='button' onClick={onClickingEdit}>EditTicket</button>
      <hr/>
    </React.Fragment>
  );
}

Ticket.propTypes = {
  ticket: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func
}

export default TicketDetail;