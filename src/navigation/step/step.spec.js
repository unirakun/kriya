/* eslint-disable import/no-extraneous-dependencies, react/jsx-filename-extension */
/* eslint-env jest */

import React from 'react'
import { shallow, mount } from 'enzyme'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import snap from 'snap'
import Step from './step'
import StepContainer from './step.container'

const snapshot = props => snap(Step)({ children: ['Hello step'], onClick: () => {}, ...props })

describe('common/Step', () => {
  describe('graphical (JSX)', () => {
    it('should call onClick when clicked', () => {
      const onClick = jest.fn()

      const wrapper = shallow(
        <Step onClick={onClick}>{'a child for onClick'}</Step>,
      )
      wrapper.find('button').simulate('click')

      expect(onClick.mock.calls.length).toBe(1)
    })

    it('should add custom className', snapshot({ className: 'custom' }))
    it('should add custom style', snapshot({ style: { backgroundColor: 'red' } }))
    it('should add children', snapshot({ children: ['a child'] }))
    it('should have a default behaviour', snapshot({}))
    it('should not print separator on last item', snapshot({ last: true }))
  })

  describe('container', () => {
    it('should dispatch a navigation event', () => {
      const store = createStore(() => ({}))
      const dispatch = jest.fn()
      store.dispatch = dispatch

      const wrapper = mount(
        <Provider store={store}>
          <StepContainer number={42}>{'text'}</StepContainer>
        </Provider>,
      )

      wrapper.find('button').simulate('click')

      expect(dispatch.mock.calls.length).toBe(1)
      expect(dispatch.mock.calls[0]).toEqual([{ type: 'NAVIGATION_CLICKED', payload: 42 }])
    })
  })
})

/* eslint-enable import/no-extraneous-dependencies, react/jsx-filename-extension */
