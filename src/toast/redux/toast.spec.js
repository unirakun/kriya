/* eslint-disable comma-dangle */
/* eslint-env jest */
import reducer from './toast'
import { getCurrentToast } from './toast.selectors'
import { open, close, remove } from './toast.actions'

const state = {
  ui: {
    toast: [
        { print: true, title: 'my toast error', type: 'error' },
        { print: true, title: 'my toast warning', type: 'warning' },
        { print: true, title: 'my toast', button: { text: 'my button', handler: () => 'test' } },
    ]
  },
}

describe('toast/redux', () => {
  describe('selectors', () => {
    it('should return first toast', () =>
      expect(getCurrentToast(state))
      .toEqual(state.ui.toast[0])
    )
  })

  describe('reducer', () => {
    it('should initialize', () =>
      expect(reducer())
      .toEqual([])
    )
    it('should handle unkown action', () =>
      expect(reducer(state, { type: 'UNKNOWN' }))
      .toBe(state)
    )
    it('should open a toast', () =>
      expect(reducer(state.ui.toast, open({ title: 'new toast' })))
      .toEqual([...state.ui.toast, { print: true, title: 'new toast' }])
    )
    it('should close a toast', () =>
      expect(reducer(state.ui.toast, close()))
      .toEqual(state.ui.toast.map((toast, idx) => {
        if (idx === 0) return { ...state.ui.toast[0], print: false }
        return toast
      }))
    )
    it('should remove a toast', () =>
      expect(reducer(state.ui.toast, remove()))
      .toEqual([...state.ui.toast].slice(1))
  )
  })
})

/* eslint-enable comma-dangle */
