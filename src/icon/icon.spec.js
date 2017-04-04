/* eslint-disable import/no-extraneous-dependencies, react/jsx-filename-extension */
/* eslint-env jest */

import React from 'react'
import renderer from 'react-test-renderer'
import Icon from './icon'

const component = ({ ...props }) => {
  return renderer.create(
    <Icon {...props} />,
  )
}


const snap = (props) => {
  const tree = component({ children: 'icon', ...props }).toJSON()
  expect(tree).toMatchSnapshot()
}

describe('common/Icon', () => {
  describe('graphical (JSX)', () => {
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
    it('should have a default behaviour', () => snap({}))
  })
})

/* eslint-enable import/no-extraneous-dependencies, react/jsx-filename-extension */
