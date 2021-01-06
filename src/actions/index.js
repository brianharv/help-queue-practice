export const deleteTicket = id => ({
  type: 'DELETE_TICKET',
  id
});

export const addTicket = ticket => {
  const { id, names, location, issue } = ticket;
  return {
    type: 'ADD_TICKET',
    id: id,
    names: names,
    location: location,
    issue: issue
  }
}

export const toggleForm = () => {
  return {
    type: 'TOGGLE_FORM'
  }
}