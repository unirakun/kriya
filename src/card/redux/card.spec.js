/* eslint-env jest */
/* eslint-disable comma-dangle */
import { isOpened } from './card.selectors'
import { open, close, openAll, closeAll } from './card.actions'
import reducer from './card'

describe('card/redux', () => {
  describe('selectors', () => {
    const state = {
      ui: {
        cards: {
          card1: true,
          card2: false,
        },
      },
    }

    it('should be closed', () =>
      expect(!isOpened(state)('card2'))
      .toBe(true)
    )

    it('should be opened', () =>
      expect(isOpened(state)('card1'))
      .toBe(true)
    )
  })

  describe('reducer', () => {
    const state = {
      card1: true,
      card2: false,
    }

    it('should initialize', () =>
      expect(reducer())
      .toEqual({})
    )

    it('should handle unkown action', () =>
      expect(reducer(state, { type: 'YO' }))
      .toEqual(state))

    it('should open a card', () =>
      expect(reducer(state, open('card2')))
      .toEqual({
        ...state,
        card2: true,
      })
    )

    it('should close a card', () =>
      expect(reducer(state, close('card1')))
      .toEqual({
        ...state,
        card1: false,
      })
    )

    it('should open all cards', () =>
      expect(reducer(state, closeAll()))
      .toEqual({
        card1: false,
        card2: false,
      })
    )

    it('should close all cards', () =>
      expect(reducer(state, openAll()))
      .toEqual({
        card1: true,
        card2: true,
      })
    )
  })
})

/* eslint-enable comma-dangle */
