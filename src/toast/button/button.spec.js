/* eslint-disable
  import/no-extraneous-dependencies,
  react/jsx-filename-extension,
  react/no-children-prop,
  react/prop-types,
*/
/* eslint-env jest */
import React from 'react'
import { mount } from 'enzyme'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import snap from 'snap'
import Button from './button'
import ButtonContainer from './button.container'
import { remove } from '../redux'

const snapshot = props => snap(Button)({ children: [], ...props })

const createContainer = (store, props) => {
  return mount(
    <Provider store={store}>
      <ButtonContainer {...props} />
    </Provider>,
  )
}

describe('common/Button', () => {
  describe('graphical (JSX)', () => {
    it('should have a default behaviour', snapshot({}))
    it('should add custom className', snapshot({ className: 'custom' }))
    it('should add custom style', snapshot({ style: { color: 'blue' } }))
    it('should add text', snapshot({ text: 'my button' }))
    it('should add handler', snapshot({ onClick: () => 'ok' }))
    it('should add custom type', snapshot({ type: 'warning' }))
  })
  describe('container', () => {
    it('should call onClick and remove when button is pressed', () => {
      const dispatch = jest.fn()
      const onClick = jest.fn()
      const state = { ui: { toast: { code: 'toast1', print: true, title: 'toast', button: { text: 'button', onClick } } } }
      const store = createStore(() => state)
      store.dispatch = dispatch
      const component = createContainer(store, state.ui.toast.button)
      component.find('button').first().simulate('click')
      expect(dispatch.mock.calls.length).toBe(1)
      expect(onClick.mock.calls.length).toBe(1)
      expect(dispatch.mock.calls[0]).toEqual([remove()])
    })
  })
})
/* eslint-enable
  import/no-extraneous-dependencies,
  react/jsx-filename-extension,
  react/no-children-prop,
  react/prop-types,
*/
