import formVisibleReducer from '../../reducers/form-visible-reducer';

describe('formVisibleReducer', () => {

  let action;

  test('Should return default state if no action type is specified', () => {
      expect(formVisibleReducer(false, { type: null })).toEqual(false)
  })

  test('Should toggle form visibility state to true', () => {

      let action = {
        type: 'TOGGLE_FORM',
      }
      expect(formVisibleReducer(false, action)).toEqual(true)
  })
})