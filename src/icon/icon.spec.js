/* eslint-disable import/no-extraneous-dependencies, react/jsx-filename-extension */
/* eslint-env jest */

import React from 'react'
import renderer from 'react-test-renderer'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import snap from 'snap'
import Icon from './icon'
import IconContainer from './icon.container'

const snapshot = props => snap(Icon)({ prefix: 'aprefix-', children: 'icon', ...props })

describe('common/Icon', () => {
  describe('graphical (JSX)', () => {
    it('should add custom className', snapshot({ className: 'custom' }))
    it('should add custom style', snapshot({ style: { backgroundColor: 'red' } }))
    it('should create a primary icon', snapshot({ primary: true }))
    it('should create a secondary icon', snapshot({ secondary: true }))
    it('should create a disabled icon', snapshot({ disabled: true }))
    it('should create an icon without color', snapshot({ noColor: true }))
    it('should create an icon with label to left', snapshot({ labelLeft: 'label' }))
    it('should create an icon with label to right', snapshot({ labelRight: 'label to right' }))
    it('should print labels to both sides', snapshot({ labelLeft: 'left', labelRight: 'right' }))
    it('should take an icon name as children', snapshot({ children: 'different-icon' }))
    it('should take a prefix', snapshot({ children: 'myIcon', prefix: 'myPrefix-' }))
    it('should have a default behaviour', snapshot({}))
    it('should add a title', snapshot({ title: 'a title' }))
    it('should change number of path to 23', snapshot({ nbPath: 23 }))
  })

  describe('container', () => {
    /* eslint-disable react/no-children-prop */
    const snapContainer = (state, { children = 'icon', ...props }) => {
      const store = createStore(() => ({ config: state }))
      const component = renderer.create(
        <Provider store={store}>
          <IconContainer children={children} {...props} />
        </Provider>,
      )

      const tree = component.toJSON()
      expect(tree).toMatchSnapshot()
    }
    /* eslint-enable react/no-children-prop */

    it('should looking for prefix in redux', () => snapContainer(
      { icon: { prefix: 'redux-prefix' } },
      {},
    ))

    it('should use a default prefix (empty one)', () => snapContainer(
      {},
      {},
    ))
  })
})

/* eslint-enable import/no-extraneous-dependencies, react/jsx-filename-extension */
