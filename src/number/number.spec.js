/* eslint-disable import/no-extraneous-dependencies, react/jsx-filename-extension */
/* eslint-env jest */

import React from 'react'
import renderer from 'react-test-renderer'
import Number from './number'

const snap = (props) => {
  const component = renderer.create(
    <Number {...props} />,
  )

  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
}

describe('common/Number', () => {
  describe('graphical (JSX)', () => {
    it('should add custom className', () => snap({ className: 'custom' }))
    it('should add custom style', () => snap({ style: { backgroundColor: 'red' } }))
    it('should add children', () => snap({ children: 'a child' }))
    it('should have a default behaviour', () => snap({}))
    it('should adapt for a map', () => snap({ map: true }))
    it('should be secondary', () => snap({ secondary: true }))
  })
})

/* eslint-enable import/no-extraneous-dependencies, react/jsx-filename-extension */
