/* eslint-disable comma-dangle */
/* eslint-env jest */
import reducer from './toast'
import { getToast } from './toast.selectors'
import { create, remove } from './toast.actions'

const state = {
  ui: {
    toast: {
      print: true, title: 'my toast with button', button: { text: 'my button', handler: () => 'test' }
    }
  }
}

describe('toast/redux', () => {
  describe('selectors', () => {
    it('should return current toast', () =>
      expect(getToast(state))
        .toEqual(state.ui.toast)
    )
  })

  describe('reducer', () => {
    it('should initialize', () =>
      expect(reducer())
        .toEqual({})
    )
    it('should handle unkown action', () =>
      expect(reducer(state, { type: 'UNKNOWN' }))
        .toBe(state)
    )
    it('should create a toast', () =>
      expect(reducer(state.ui.toast, create.error('new toast')))
        .toEqual({ title: 'new toast', type: 'error', print: true })
    )
    it('should remove a toast', () =>
      expect(reducer(state.ui.toast, remove()))
        .toEqual({})
    )
  })
})

/* eslint-enable comma-dangle */
