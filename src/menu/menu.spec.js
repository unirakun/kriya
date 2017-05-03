/* eslint-disable import/no-extraneous-dependencies, react/jsx-filename-extension */
/* eslint-env jest */

import React from 'react'
import renderer from 'react-test-renderer'
import Menu from './menu'

const snap = (props) => {
  const component = renderer.create(
    <Menu {...props} />,
  )

  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
}

describe('common/Menu', () => {
  it('should have a default behaviour', () => snap({}))
  it('should add custom className', () => snap({ className: 'custom' }))
  it('should add custom style', () => snap({ style: { backgroundColor: 'red' } }))
  it('should add a header', () => snap({ header: <div>header</div> }))
  it('should add a footer', () => snap({ footer: <div>footer</div> }))
  it('should add items', () => snap({ children: [<div key={1}>1</div>, <div key={2}>2</div>] }))
})

/* eslint-enable import/no-extraneous-dependencies, react/jsx-filename-extension */
