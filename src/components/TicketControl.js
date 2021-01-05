import React from 'react';
import NewTicketForm from './NewTicketForm';
import TicketList from './TicketList';
import TicketDetail from './TicketDetail';
import EditTicketForm from './EditTicketForm'; 

class TicketControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      selectedTicket: null,
      editing: false,
      masterTicketList: []
    };
  }

  handleClick = () => {
    if (this.state.selectedTicket != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedTicket: null,
        editing: false
      });
    } else {
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage
      }));
    }
  }

  handleAddingNewTicketToList = (newTicket) => {
    const newMasterTicketList = this.state.masterTicketList.concat(newTicket)
    this.setState({
      masterTicketList: newMasterTicketList,
      formVisibleOnPage: false
    })
  }

  handleChangingSelectedTicket = id => {
    const selectedTicket = this.state.masterTicketList.filter(ticket => ticket.id === id)[0]; // don't forget to specify that you want only the first element.
    this.setState({
      selectedTicket: selectedTicket
    });
  }

  handleDeletingTicket = id => {
    const newMasterTicketList = this.state.masterTicketList.filter(ticket => ticket.id != id); 
    this.setState({
      masterTicketList: newMasterTicketList,
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
    const editedMasterTicketList = this.state.masterTicketList
      .filter(ticket => ticket.id !== this.state.selectedTicket.id)
      .concat(ticketToEdit)
    this.setState({
      masterTicketList: editedMasterTicketList,
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
    else if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewTicketForm onNewTicketCreation={this.handleAddingNewTicketToList}/>
      buttonText = "Return to Ticket List"
    } else {
      currentlyVisibleState = <TicketList ticketList={this.state.masterTicketList} onTicketSelection={this.handleChangingSelectedTicket}/> // we are saving the value of the state and methods in props -- also we are passing an OBJECT
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

export default TicketControl;