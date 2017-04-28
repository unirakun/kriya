/* eslint-disable comma-dangle */
/* eslint-env jest */
import reducer from './popover'
import { getPopover } from './popover.selectors'
import { openPopover, closePopover } from './popover.actions'

describe('popover/redux', () => {
  describe('selectors', () => {
    const state = {
      ui: {
        popover: {
          pop1: true,
          pop2: false,
        },
      },
    }

    it('should return popover', () =>
      expect(getPopover(state))
      .toEqual({ pop1: true, pop2: false })
    )
  })

  describe('reducer', () => {
    const state = {
      pop1: true,
      pop2: false,
    }

    it('should initialize', () =>
      expect(reducer())
      .toEqual({})
    )

    it('should handle unkown action', () =>
      expect(reducer(state, { type: 'YO' }))
      .toBe(state)
    )

    it('should add open a popover', () =>
      expect(reducer(state, openPopover('pop2')))
      .toEqual({ ...state, pop2: true })
    )

    it('should close a popover', () =>
      expect(reducer(state, closePopover('pop1')))
      .toEqual({ pop2: false })
    )
  })
})

/* eslint-enable comma-dangle */
