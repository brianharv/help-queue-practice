import React from 'react';
import NewTicketForm from './NewTicketForm';
import TicketList from './TicketList';
import TicketDetail from './TicketDetail';
import EditTicketForm from './EditTicketForm'; 
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class TicketControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      // formVisibleOnPage: false,
      selectedTicket: null,
      editing: false,
    };
  }

  handleClick = () => {
    if (this.state.selectedTicket != null) {
      this.setState({
        selectedTicket: null,
        editing: false
      });
    } else {
      const { dispatch } = this.props;
      const action = {
        type: 'TOGGLE_FORM'
      }
      dispatch(action);
    }
  }

  handleAddingNewTicketToList = (newTicket) => {
    const { dispatch } = this.props; // REMEMBER this.props is referring to connect which is wrapping TicketControl. It's grabbing the props from the HOC
    const { names, location, issue, id } = newTicket;
    const action = {
      type: 'ADD_TICKET',
      id: id,
      names: names,
      location: location,
      issue: issue
    }
    dispatch(action);
    const action2 = {
      type: 'TOGGLE_FORM'
    }
    dispatch(action2);
  }

  handleChangingSelectedTicket = id => {
    const selectedTicket = this.props.masterTicketList[id];
    this.setState({
      selectedTicket: selectedTicket
    });
  }

  handleDeletingTicket = id => {
    const { dispatch } = this.props;
    const action = {
      type: 'DELETE_TICKET',
      id: id // just need id because that is the key in the masterTicketList object State slice
    }
    dispatch(action);
    this.setState({
      selectedTicket: null
    })
  }

  handleEditClick = () => {
    console.log("handleEditClick reached")
    this.setState({
      editing: true
    })
  }

  handleEditingTicketInList = ticketToEdit => {
    const { dispatch } = this.props;
    const { names, id, location, issue } = ticketToEdit; // REMEMBER you're only destructuring the parameter and can only take out of the parameter what info it has.
    const action = {
      type: 'ADD_TICKET',
      id: id,
      names: names,
      location: location,
      issue: issue
    }
    dispatch(action);
    this.setState({
      selectedTicket: null,
      editing: false
    })
  }


  render() {
    let currentlyVisibleState = null;
    let buttonText = null;

    if (this.state.editing) {
      currentlyVisibleState = <EditTicketForm  ticket={this.state.selectedTicket} onEditTicket={this.handleEditingTicketInList}/>
      buttonText = 'Return to Ticket List'
    } 
    else if (this.state.selectedTicket != null) {
      currentlyVisibleState = <TicketDetail ticket={this.state.selectedTicket} onClickingDelete={this.handleDeletingTicket} onClickingEdit={this.handleEditClick}/>
      buttonText = "Return to Ticket List";
    }
    else if (this.props.formVisibleOnPage) {
      currentlyVisibleState = <NewTicketForm onNewTicketCreation={this.handleAddingNewTicketToList}/>
      buttonText = "Return to Ticket List"
    } else {
      currentlyVisibleState = <TicketList ticketList={this.props.masterTicketList} onTicketSelection={this.handleChangingSelectedTicket}/> // we are saving the value of the state and methods in props -- also we are passing an OBJECT
      buttonText = "Add Ticket"
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }
}

TicketControl.propTypes = {
  masterTicketList: PropTypes.object,
  formVisibleOnPage: PropTypes.bool
} 

const mapStateToProps = state => {
  return {
    masterTicketList: state.masterTicketList,
    formVisibleOnPage: state.formVisibleOnPage
  }
}

TicketControl = connect(mapStateToProps)(TicketControl); // connect gives us mapStateToProps() and dispatchj()

export default TicketControl;