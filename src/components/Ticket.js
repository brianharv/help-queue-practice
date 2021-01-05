import React from 'react';
import PropTypes from 'prop-types';

const Ticket = props => {
  return(
    <React.Fragment>
      <div onClick={() => props.whenTicketClicked(props.id)}> 
        <h3>{props.location} - {props.names}</h3>
        <p><em>{props.issue}</em></p>
        <hr/>
      </div>
    </React.Fragment>
  );
} // we are wrapping the ticket in a div and passing it id so that the selectedTicket state can be triggered. Each div has a unique id that is passed to state onClick.

Ticket.propTypes = {
  whenTicketClicked: PropTypes.func,
  names: PropTypes.string,
  location: PropTypes.string,
  issue: PropTypes.string,
  id: PropTypes.string
}

export default Ticket;