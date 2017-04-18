/* eslint-disable import/no-extraneous-dependencies, react/jsx-filename-extension */
/* eslint-env jest */

import React from 'react'
import renderer from 'react-test-renderer'
import { shallow, mount } from 'enzyme'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import Step from './step'
import StepContainer from './step.container'

const snap = (props) => {
  const component = renderer.create(
    <Step children={['Hello step']} onClick={() => {}} {...props} />, // eslint-disable-line react/no-children-prop
  )

  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
}

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

    it('should add custom className', () => snap({ className: 'custom' }))
    it('should add custom style', () => snap({ style: { backgroundColor: 'red' } }))
    it('should add children', () => snap({ children: ['a child'] }))
    it('should have a default behaviour', () => snap({}))
    it('should not print separator on last item', () => snap({ last: true }))
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
