/* eslint-disable comma-dangle */
/* eslint-env jest */
import reducer from './bottomSheets'
import { get } from './bottomSheets.selectors'
import { open, close } from './bottomSheets.actions'

const state = {
  ui: {
    bottomSheets: {
      pop1: { print: true, contents: { content: 'content' } },
      pop2: { print: true },
    },
  },
}

describe('bottomSheets/redux', () => {
  describe('selectors', () => {
    it('should return bottomSheets', () =>
      expect(get(state))
      .toEqual(state.ui.bottomSheets)
    )
  })

  describe('reducer', () => {
    it('should initialize', () =>
      expect(reducer())
      .toEqual({})
    )

    it('should handle unkown action', () =>
      expect(reducer(state, { type: 'YO' }))
      .toBe(state)
    )

    it('should add open a bottomSheets', () =>
      expect(reducer(state.ui.bottomSheets, open('pop2')))
      .toEqual({ ...state.ui.bottomSheets, pop2: { print: true } })
    )

    it('should close a bottomSheets', () =>
      expect(reducer(state.ui.bottomSheets, close('pop1')))
      .toEqual({ ...state.ui.bottomSheets, pop1: { ...state.ui.bottomSheets.pop1, print: false } })
    )
  })
})

/* eslint-enable comma-dangle */
