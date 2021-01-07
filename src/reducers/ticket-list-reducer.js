import * as c from '../actions/ActionTypes';

export default (state = {}, action) => { // don't forget that you can declare your default state in a constant above.
  const { names, location, issue, id } = action;
  switch (action.type) {
  case c.ADD_TICKET:
    return Object.assign({}, state, {
      [id]: {
        names: names,
        location: location,
        issue: issue,
        id: id
      }
    });
  case c.DELETE_TICKET:
    const newState = { ...state };
    delete newState[id];
    return newState;
  default:
    return state;
  }
};