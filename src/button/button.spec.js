/* eslint-disable import/no-extraneous-dependencies, react/jsx-filename-extension */
/* eslint-env jest */

import React from 'react'
import { mount } from 'enzyme'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import mockComponent from '__mocks__/component'
import snap from 'snap'
import Button from './button'
import ButtonContainer from './button.container'

jest.mock('../icon', () => mockComponent('icon'))

const snapshot = props => snap(Button)({ onClick: () => {}, ...props })

describe('common/Button', () => {
  describe('graphical (JSX)', () => {
    it('should call onClick when button clicked', () => {
      const onClick = jest.fn()

      const wrapper = mount(
        <Button onClick={onClick} />,
      )
      wrapper.find('button').simulate('click')

      expect(onClick.mock.calls.length).toBe(1)
    })

    it('should call onClick when link clicked', () => {
      const onClick = jest.fn()

      const wrapper = mount(
        <Button href="link" onClick={onClick} />,
      )
      wrapper.find('a').simulate('click')

      expect(onClick.mock.calls.length).toBe(1)
    })

    it('should add custom className', snapshot({ className: 'custom' }))
    it('should add custom style', snapshot({ style: { backgroundColor: 'red' } }))
    it('should add children', snapshot({ children: 'a child' }))
    it('should create button with link', snapshot({ link: 'http://A_LINK_TO_THE_PAST' }))
    it('should create button with link on new tab', snapshot({ href: 'http://A_LINK_TO_THE_PAST', targetBlank: true }))
    it('should create button with left icon ', snapshot({ iconLeft: 'calendar' }))
    it('should create button with right icon ', snapshot({ iconRight: 'calendar' }))
    it('should create button with right and left icon ', snapshot({ iconRight: 'calendar', iconLeft: 'calendar' }))
    it('should create a large button', snapshot({ large: true }))
    it('should create a primary button', snapshot({ primary: true }))
    it('should create a secondary button', snapshot({ secondary: true }))
    it('should create a disabled button', snapshot({ disabled: true }))
    it('should create a flat button', snapshot({ flat: true }))
    it('should create a flat primary button', snapshot({ flat: true, primary: true }))
    it('should create a flat secondary button', snapshot({ flat: true, secondary: true }))
    it('shouldnt print ink behaviour', snapshot({ ink: false }))
    it('should be a submit button', snapshot({ type: 'submit' }))
    it('should have a default behaviour', snapshot({}))
  })

  describe('container', () => {
    it('should dispatch a button click event', () => {
      const store = createStore(() => ({}))
      const dispatch = jest.fn()
      store.dispatch = dispatch

      const wrapper = mount(
        <Provider store={store}>
          <ButtonContainer name="button" />
        </Provider>,
      )

      wrapper.find('button').simulate('click')

      expect(dispatch.mock.calls.length).toBe(1)
      expect(dispatch.mock.calls[0]).toEqual([{ type: 'BTN_CLICKED_button' }])
    })

    it('should dispatch a link click event', () => {
      const store = createStore(() => ({}))
      const dispatch = jest.fn()
      store.dispatch = dispatch

      const wrapper = mount(
        <Provider store={store}>
          <ButtonContainer href="href" name="link" />
        </Provider>,
      )

      wrapper.find('a').simulate('click')

      expect(dispatch.mock.calls.length).toBe(1)
      expect(dispatch.mock.calls[0]).toEqual([{ type: 'BTN_CLICKED_link' }])
    })

    it('should dispatch click event and onCick function', () => {
      const store = createStore(() => ({}))
      const dispatch = jest.fn()
      store.dispatch = dispatch

      const wrapper = mount(
        <Provider store={store}>
          <ButtonContainer name="CLICK" onClick={() => 'CUSTOM_CLICK'} />
        </Provider>,
      )

      wrapper.find('button').simulate('click')

      expect(dispatch.mock.calls.length).toBe(1)
      expect(dispatch.mock.calls[0]).toEqual([{ type: 'BTN_CLICKED_CLICK' }])
    })
  })
})

/* eslint-enable import/no-extraneous-dependencies, react/jsx-filename-extension */
