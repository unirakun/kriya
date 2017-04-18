/* eslint-disable import/no-extraneous-dependencies, react/jsx-filename-extension */
/* eslint-env jest */

import React from 'react'
import renderer from 'react-test-renderer'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import Navigation from './navigation'

const snap = (props) => {
  const store = createStore(() => ({}))
  /* eslint-disable react/no-children-prop */
  const component = renderer.create(
    <Provider store={store}>
      <Navigation children={[]} {...props} />
    </Provider>,
  )
  /* eslint-enable react/no-children-prop */

  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
}

describe('common/Navigation', () => {
  describe('graphical (JSX)', () => {
    it('should add custom className', () => snap({ className: 'custom' }))
    it('should add custom style', () => snap({ style: { backgroundColor: 'red' } }))
    it('should have a default behaviour', () => snap({}))
    it('should handle one step', () => snap({ children: ['step 1'] }))
    it('should handle multiple steps', () => snap({ children: ['step 1', 'step 2'] }))
  })
})

/* eslint-enable import/no-extraneous-dependencies, react/jsx-filename-extension */
