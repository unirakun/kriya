/* eslint-disable import/no-extraneous-dependencies, react/jsx-filename-extension */
/* eslint-env jest */

import React from 'react'
import ReactTestUtils from 'react-dom/test-utils'
import mockComponent from '__mocks__/component'
import snap from 'snap'
import Avatar from './avatar'

jest.mock('../icon', () => mockComponent('icon'))

const snapshot = snap(Avatar)

describe('common/Icon', () => {
  describe('graphical (JSX)', () => {
    it('should add custom className', snapshot({ className: 'custom' }))
    it('should add custom style', snapshot({ style: { backgroundColor: 'red' } }))
    it('should create a picture avatar', snapshot({ picture: 'picture' }))
    it('should create male avatar', snapshot({ isMale: true }))
    it('should create female avatar', snapshot({ isMale: false }))
    it('should have a default behaviour', snapshot({}))

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
