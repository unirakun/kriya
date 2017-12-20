/* eslint-disable
  import/no-extraneous-dependencies,
  react/jsx-filename-extension,
  react/no-children-prop,
  react/prop-types,
*/
/* eslint-env jest */
import React from 'react'
import snap from 'snap'
import { mount } from 'enzyme'
import { createStore } from 'redux'
import renderer from 'react-test-renderer'
import { Provider } from 'react-redux'
import Toast from './toast'
import { CLOSE_TOAST, close, REMOVE_TOAST, remove } from './redux'
import ToastContainer from './toast.container'

const snapshot = props => snap(Toast)({ children: [], ...props })
const createContainer = (store) => {
  return mount(
    <Provider store={store}>
      <ToastContainer />
    </Provider>,
  )
}

describe('common/Toast', () => {
  describe('graphical (JSX)', () => {
    it('should have a default behaviour', snapshot({}))
    it('should add custom className', snapshot({ className: 'custom' }))
    it('should add custom style', snapshot({ style: { backgroundColor: 'red' } }))
    it('should add title', snapshot({ title: 'my awesome title' }))
    it('should add button', snapshot({ button: { title: 'my button' } }))
    it('should add button and handler', snapshot({ button: { title: 'my button', handler: () => 'ok' } }))
    it('should add custom delay', snapshot({ delay: 1000 }))
    it('should add custom type', snapshot({ type: 'warning' }))
    it('should add custom position', snapshot({ position: 'top' }))
    it('should print toast', snapshot({ print: true }))
  })
  describe('container', () => {
    const snapContainer = (state, props, store) => {
      const component = renderer.create(
        <Provider store={store || createStore(() => ({ ui: { toast: state } }))}>
          <ToastContainer {...props} />
        </Provider>,
      )
      const tree = component.toJSON()
      expect(tree).toMatchSnapshot()
    }
    it("should pass position when it's defined in props", () => snapContainer([], { position: 'top' }))
    it(`should call ${CLOSE_TOAST} and ${REMOVE_TOAST} when button is pressed`, () => {
      jest.useFakeTimers()
      const dispatch = jest.fn()
      const store = createStore(() => ({ ui: { toast: [{ print: true, title: 'toast', button: { text: 'button' } }] } }))
      store.dispatch = dispatch
      const component = createContainer(store)
      component.find('button').first().simulate('click')
      jest.runAllTimers()
      expect(dispatch.mock.calls.length).toBe(2)
      expect(dispatch.mock.calls[0]).toEqual([close()])
      expect(dispatch.mock.calls[1]).toEqual([remove()])
    })
    it(`should call ${CLOSE_TOAST} and ${REMOVE_TOAST} when delay is done`, () => {
      jest.useFakeTimers()
      const dispatch = jest.fn()
      const store = createStore(() => ({ ui: { toast: [{ print: true, title: 'toast' }] } }))
      store.dispatch = dispatch
      createContainer(store)
      jest.runAllTimers()
      expect(dispatch.mock.calls.length).toBe(2)
      expect(dispatch.mock.calls[0]).toEqual([close()])
      expect(dispatch.mock.calls[1]).toEqual([remove()])
      jest.clearAllTimers()
    })
  })
})

/* eslint-enable
  import/no-extraneous-dependencies,
  react/jsx-filename-extension,
  react/no-children-prop,
  react/prop-types,
*/

