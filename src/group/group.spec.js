/* eslint-disable import/no-extraneous-dependencies, react/jsx-filename-extension */
/* eslint-env jest */

import React from 'react'
import renderer from 'react-test-renderer'
import Group from './group'

const snap = ({ onClick = () => {}, ...rest }) => {
  const component = renderer.create(
    <Group {...rest} onClick={onClick} />,
  )

  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
}

describe('common/Group', () => {
  it('should have a default behaviour', () => snap({}))
  it('should add custom className', () => snap({ className: 'custom' }))
  it('should add custom style', () => snap({ style: { backgroundColor: 'red' } }))
  it('should add children', () => snap({ children: 'a child' }))

  it('should add vertical class when vertical group', () => snap({ vertical: true }))
})

/* eslint-enable import/no-extraneous-dependencies, react/jsx-filename-extension */
