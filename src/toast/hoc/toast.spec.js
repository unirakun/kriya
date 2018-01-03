/* eslint-disable
  import/no-extraneous-dependencies,
  react/jsx-filename-extension,
  react/no-children-prop,
  react/prop-types,
*/
/* eslint-env jest */

import { addDelay } from './toast'

describe('HOC', () => {
  it('should call remove when delay is done', () => {
    jest.useFakeTimers()
    const remove = jest.fn()
    const prevProps = {}
    const props = { code: 'newToast', remove, print: true }
    addDelay(prevProps, props, 3000)
    jest.runAllTimers()
    expect(remove.mock.calls.length).toBe(1)
    jest.clearAllTimers()
  })
  it('should not call remove if the current toast is already print', () => {
    jest.useFakeTimers()
    const remove = jest.fn()
    const prevProps = { code: 'toast1', remove, print: true }
    const props = { code: 'toast1', remove, print: true }
    addDelay(prevProps, props, 3000)
    jest.runAllTimers()
    expect(remove.mock.calls.length).toBe(0)
    jest.clearAllTimers()
  })
})

/* eslint-enable
  import/no-extraneous-dependencies,
  react/jsx-filename-extension,
  react/no-children-prop,
  react/prop-types,
*/

