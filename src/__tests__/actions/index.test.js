import * as a from '../../actions/index';
import * as c from '../../actions/ActionTypes';

describe('help queue actions', () => {
  it('deleteTicket should create DELETE_TICKET action', () => {
    expect(a.deleteTicket(1)).toEqual({
      type: c.DELETE_TICKET,
      id: 1
    });
  });

  test('addTIcket should create ADD_TICKET action', () => {
    expect(a.addTicket({names: 'Jack and Jo', location: '4d', issue: 'What now', id: 1})).toEqual({
      type: c.ADD_TICKET,
      id: 1,
      names: 'Jack and Jo',
      location: '4d',
      issue: 'What now'
    })
  })

  test('toggleForm should create TOGGLE_FORM action', () => {
    expect(a.toggleForm()).toEqual({
      type: c.TOGGLE_FORM
    })
  })
});