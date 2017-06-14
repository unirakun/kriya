/* eslint-disable comma-dangle */
/* eslint-env jest */
import reducer from './popover'
import { getPopover } from './popover.selectors'
import { openPopover, closePopover } from './popover.actions'

const state = {
  ui: {
    popover: {
      pop1: { print: true, contents: { content: 'content' } },
      pop2: { print: true },
    },
  },
}

describe('popover/redux', () => {
  describe('selectors', () => {
    it('should return popover', () =>
      expect(getPopover(state))
      .toEqual(state.ui.popover)
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

    it('should add open a popover', () =>
      expect(reducer(state.ui.popover, openPopover('pop2')))
      .toEqual({ ...state.ui.popover, pop2: { print: true } })
    )

    it('should close a popover', () =>
      expect(reducer(state.ui.popover, closePopover('pop1')))
      .toEqual({ pop2: state.ui.popover.pop2 })
    )
  })
})

/* eslint-enable comma-dangle */
