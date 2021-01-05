import React from 'react';
import Ticket from './Ticket';
import PropTypes from 'prop-types';

const TicketList = props => {
  return(
    <React.Fragment>
      <hr/>
      {props.ticketList.map((ticket) =>
        <Ticket
          whenTicketClicked={props.onTicketSelection} // this has to be props because it's coming from above and not .map()
          names={ticket.names}
          location={ticket.location}
          issue={ticket.issue}
          id={ticket.id}
          key={ticket.id} // we can make this id because it is more unique. id and key properties are used for totally different things.
        />
      )};
    </React.Fragment>
  );
}

TicketList.propTypes = {
  ticketList: PropTypes.array,
  onTicketSelection: PropTypes.func
}

export default TicketList;