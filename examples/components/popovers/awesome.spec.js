/* eslint-disable
 import/no-extraneous-dependencies,
 react/jsx-filename-extension,
 react/prop-types
 */
/* eslint-env jest */
import React from 'react'
import renderer from 'react-test-renderer'
import Awesome from './awesome'

const snap = (props) => {
  const component = renderer.create(
    <Awesome print {...props} />,
  )

  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
}

describe('popovers/innovative', () => {
  it('should have a default behaviour', () => snap({}))
  it('should add custom className', () => snap({ className: 'custom' }))
  it('should add custom style', () => snap({ style: { backgroundColor: 'red' } }))

  it('should not print', () => snap({ print: false }))
})

/* eslint-enable
 import/no-extraneous-dependencies,
 react/jsx-filename-extension,
 react/prop-types
 */
