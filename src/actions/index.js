import * as c from './ActionTypes';

export const deleteTicket = id => ({
  type: c.DELETE_TICKET,
  id
});

// export const addTicket = ticket => {
//   const { id, names, location, issue } = ticket;
//   return {
//     type: c.ADD_TICKET,
//     id: id,
//     names: names,
//     location: location,
//     issue: issue
//   }
// }

export const toggleForm = () => {
  return {
    type: c.TOGGLE_FORM
  }
}