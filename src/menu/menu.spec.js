/* eslint-disable import/no-extraneous-dependencies, react/jsx-filename-extension */
/* eslint-env jest */

import React from 'react'
import renderer from 'react-test-renderer'
import { mount } from 'enzyme'
import Menu from './menu'
import { mapDispatchToProps } from './menu.container'

const snap = (props) => {
  const component = renderer.create(
    <Menu onHeaderClick={() => {}} onFooterClick={() => {}} {...props} />,
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

  describe('callbacks', () => {
    const clickTest = (props, selector) => {
      const wrapper = mount(
        <Menu {...props} />,
      )

      wrapper.find(selector).first().simulate('click')
    }

    it('should trigger a header click event', () => {
      const onFooterClick = jest.fn()
      const onHeaderClick = jest.fn()
      clickTest({ onFooterClick, onHeaderClick, header: <div>header</div> }, '.header')

      expect(onFooterClick.mock.calls.length).toBe(0)
      expect(onHeaderClick.mock.calls.length).toBe(1)
    })

    it('should trigger a footer click event', () => {
      const onFooterClick = jest.fn()
      const onHeaderClick = jest.fn()
      clickTest({ onFooterClick, onHeaderClick, footer: <div>footer</div> }, '.footer')

      expect(onFooterClick.mock.calls.length).toBe(1)
      expect(onHeaderClick.mock.calls.length).toBe(0)
    })
  })

  describe('container', () => {
    it('should trigger a header click', () => {
      const dispatch = jest.fn()
      const result = mapDispatchToProps(dispatch)

      result.onHeaderClick()
      expect(dispatch.mock.calls.length).toBe(1)
      expect(dispatch.mock.calls[0]).toEqual([{ type: 'MENU_HEADER_CLICKED' }])
    })

    it('should trigger a footer click', () => {
      const dispatch = jest.fn()
      const result = mapDispatchToProps(dispatch)

      result.onFooterClick()
      expect(dispatch.mock.calls.length).toBe(1)
      expect(dispatch.mock.calls[0]).toEqual([{ type: 'MENU_FOOTER_CLICKED' }])
    })
  })
})

/* eslint-enable import/no-extraneous-dependencies, react/jsx-filename-extension */
