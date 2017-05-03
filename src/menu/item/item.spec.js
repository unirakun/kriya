/* eslint-disable import/no-extraneous-dependencies, react/jsx-filename-extension */
/* eslint-env jest */

import React from 'react'
import renderer from 'react-test-renderer'
import mockComponent from 'misc/__mocks__/component'
import Item from './item'

jest.mock('../../button', () => mockComponent('button'))

const component = (props) => {
  return renderer.create(
    <Item {...props} />,
  )
}

const snap = (props) => {
  const c = component(props)
  const tree = c.toJSON()
  expect(tree).toMatchSnapshot()
}

describe('common/Item', () => {
  describe('graphical (JSX)', () => {
    it('should add custom className', () => snap({ className: 'custom' }))
    it('should add custom style', () => snap({ style: { backgroundColor: 'red' } }))
    it('should have a default behaviour', () => snap({}))
    it('should take a name', () => snap({ name: 'a name' }))
  })
})

/* eslint-enable import/no-extraneous-dependencies, react/jsx-filename-extension */
