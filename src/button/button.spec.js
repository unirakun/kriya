/* eslint-disable import/no-extraneous-dependencies, react/jsx-filename-extension */
/* eslint-env jest */

import React from 'react'
import renderer from 'react-test-renderer'
import { mount } from 'enzyme'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import mockComponent from 'misc/__mocks__/component'
import Button from './button'
import ButtonContainer from './button.container'

jest.mock('../icon', () => mockComponent('icon'))

const snap = ({ onClick = () => {}, ...rest }) => {
  const component = renderer.create(
    <Button {...rest} onClick={onClick} />,
  )

  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
}

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

    it('should add custom className', () => snap({ className: 'custom' }))
    it('should add custom style', () => snap({ style: { backgroundColor: 'red' } }))
    it('should add children', () => snap({ children: 'a child' }))
    it('should create button with link', () => snap({ link: 'http://A_LINK_TO_THE_PAST' }))
    it('should create button with link on new tab', () => snap({ href: 'http://A_LINK_TO_THE_PAST', targetBlank: true }))
    it('should create button with left icon ', () => snap({ iconLeft: 'calendar' }))
    it('should create button with right icon ', () => snap({ iconRight: 'calendar' }))
    it('should create button with right and left icon ', () => snap({ iconRight: 'calendar', iconLeft: 'calendar' }))
    it('should create a large button', () => snap({ large: true }))
    it('should create a primary button', () => snap({ primary: true }))
    it('should create a secondary button', () => snap({ secondary: true }))
    it('should create a disabled button', () => snap({ disabled: true }))
    it('should create a flat button', () => snap({ flat: true }))
    it('should create a flat primary button', () => snap({ flat: true, primary: true }))
    it('should create a flat secondary button', () => snap({ flat: true, secondary: true }))
    it('shouldnt print ink behaviour', () => snap({ ink: false }))
    it('should have a default behaviour', () => snap({}))
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
  })
})

/* eslint-enable import/no-extraneous-dependencies, react/jsx-filename-extension */
