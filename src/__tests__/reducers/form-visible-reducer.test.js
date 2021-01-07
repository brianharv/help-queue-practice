import formVisibleReducer from '../../reducers/form-visible-reducer';
import * as c from '../../actions/ActionTypes';

describe('formVisibleReducer', () => {

  let action;

  test('Should return default state if no action type is specified', () => {
      expect(formVisibleReducer(false, { type: null })).toEqual(false)
  })

  test('Should toggle form visibility state to true', () => {

      let action = {
        type: c.TOGGLE_FORM,
      }
      expect(formVisibleReducer(false, action)).toEqual(true)
  })
})