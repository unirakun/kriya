/* eslint-disable import/no-extraneous-dependencies, react/jsx-filename-extension */
/* eslint-env jest */

import React from 'react'
import renderer from 'react-test-renderer'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import Icon from './icon'
import IconContainer from './icon.container'

describe('common/Icon', () => {
  describe('graphical (JSX)', () => {
    const component = ({ ...props }) => {
      return renderer.create(
        <Icon {...props} />,
      )
    }

    const snap = (props) => {
      const tree = component({ prefix: 'aprefix-', children: 'icon', ...props }).toJSON()
      expect(tree).toMatchSnapshot()
    }

    it('should add custom className', () => snap({ className: 'custom' }))
    it('should add custom style', () => snap({ style: { backgroundColor: 'red' } }))
    it('should create a primary icon', () => snap({ primary: true }))
    it('should create a secondary icon', () => snap({ secondary: true }))
    it('should create a disabled icon', () => snap({ disabled: true }))
    it('should create an icon without color', () => snap({ noColor: true }))
    it('should create an icon with label to left', () => snap({ labelLeft: 'label' }))
    it('should create an icon with label to right', () => snap({ labelRight: 'label to right' }))
    it('should print labels to both sides', () => snap({ labelLeft: 'left', labelRight: 'right' }))
    it('should take an icon name as children', () => snap({ children: 'different-icon' }))
    it('should take a prefix', () => snap({ children: 'myIcon', prefix: 'myPrefix-' }))
    it('should have a default behaviour', () => snap({}))
  })

  describe('container', () => {
    /* eslint-disable react/no-children-prop */
    const snap = (state, { children = 'icon', ...props }) => {
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

    it('should looking for prefix in redux', () => snap(
      { icon: { prefix: 'redux-prefix' } },
      {},
    ))

    it('should use a default prefix (empty one)', () => snap(
      {},
      {},
    ))
  })
})

/* eslint-enable import/no-extraneous-dependencies, react/jsx-filename-extension */
