/* eslint-disable import/no-extraneous-dependencies, react/jsx-filename-extension */
/* eslint-env jest */

import React from 'react'
import renderer from 'react-test-renderer'
import ReactTestUtils from 'react-addons-test-utils'
import mockComponent from 'misc/__mocks__/component'
import Avatar from './avatar'

jest.mock('../icon', () => mockComponent('icon'))

const component = (props) => {
  return renderer.create(
    <Avatar {...props} />,
  )
}

const snap = (props, Component) => {
  const c = Component || component(props)
  const tree = c.toJSON()
  expect(tree).toMatchSnapshot()
}

describe('common/Icon', () => {
  describe('graphical (JSX)', () => {
    it('should add custom className', () => snap({ className: 'custom' }))
    it('should add custom style', () => snap({ style: { backgroundColor: 'red' } }))
    it('should create a picture avatar', () => snap({ picture: 'picture' }))
    it('should create male avatar', () => snap({ isMale: true }))
    it('should create female avatar', () => snap({ isMale: false }))
    it('should have a default behaviour', () => snap({}))

    it('should print avatar when image is on error', () => {
      const rendered = ReactTestUtils.renderIntoDocument(<Avatar picture="url://url.jpeg" />)
      let img = ReactTestUtils.findRenderedDOMComponentWithTag(rendered, 'img')
      let icon = ReactTestUtils.scryRenderedDOMComponentsWithClass(rendered, 'icon')
      expect(img).toBeDefined()
      expect(icon).toHaveLength(0)

      // Fake error
      ReactTestUtils.Simulate.error(img)

      // Image is not printed anymore, icon is
      img = ReactTestUtils.scryRenderedDOMComponentsWithTag(rendered, 'img')
      icon = ReactTestUtils.findRenderedDOMComponentWithClass(rendered, 'icon')
      expect(img).toHaveLength(0)
      expect(icon).toBeDefined()
    })
  })
})

/* eslint-enable import/no-extraneous-dependencies, react/jsx-filename-extension */
