/* eslint-disable
  import/no-extraneous-dependencies,
  react/jsx-filename-extension,
  react/no-children-prop,
  react/prop-types,
*/
/* eslint-env jest */

import { addDelay } from './toast'

const props = remove => ({ title: 'title', type: 'success', print: true, remove })

describe('HOC', () => {
  it('should call remove when delay is done', () => {
    jest.useFakeTimers()
    const remove = jest.fn()
    const prevProps = {}
    addDelay(prevProps, props(remove), 3000)
    jest.runAllTimers()
    expect(remove.mock.calls.length).toBe(1)
    jest.clearAllTimers()
  })
  it('should not call remove if the current toast is already print', () => {
    jest.useFakeTimers()
    const remove = jest.fn()
    addDelay(props(remove), props(remove), 3000)
    jest.runAllTimers()
    expect(remove.mock.calls.length).toBe(0)
    jest.clearAllTimers()
  })
  it('should remove current timeout when new toast is printed', () => {
    jest.useFakeTimers()
    const handler = jest.fn()
    const remove = jest.fn()
    const prevProps = props(remove)
    addDelay(prevProps, { ...props(remove), title: 'title2' }, 3000, setTimeout(handler, 5000))
    jest.runAllTimers()
    expect(clearTimeout).toHaveBeenCalledTimes(1)
    expect(handler).toHaveBeenCalledTimes(0)
    expect(remove.mock.calls.length).toBe(1)
    jest.clearAllTimers()
  })
})

/* eslint-enable
  import/no-extraneous-dependencies,
  react/jsx-filename-extension,
  react/no-children-prop,
  react/prop-types,
*/

