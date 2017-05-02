/* eslint-disable comma-dangle */
/* eslint-env jest */
import reducer from './navigation'
import { getNavigation } from './navigation.selectors'
import { addStep, resetSteps } from './navigation.actions'

describe('navigation/redux', () => {
  describe('selectors', () => {
    const state = {
      ui: {
        navigation: [1, 2, 3],
      },
    }

    it('should return navigation', () =>
      expect(getNavigation(state))
      .toEqual([1, 2, 3])
    )
  })

  describe('reducer', () => {
    const state = [1, 2, 3]

    it('should initialize', () =>
      expect(reducer())
      .toEqual([])
    )

    it('should handle unkown action', () =>
      expect(reducer(state, { type: 'YO' }))
      .toBe(state)
    )

    it('should add a step', () =>
      expect(reducer(state, addStep(19)))
      .toEqual([...state, 19])
    )

    it('should reset steps', () =>
      expect(reducer(state, resetSteps()))
      .toEqual([])
    )
  })
})

/* eslint-enable comma-dangle */
