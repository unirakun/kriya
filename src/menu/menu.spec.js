/* eslint-disable import/no-extraneous-dependencies, react/jsx-filename-extension */
/* eslint-env jest */

import React from 'react'
import { mount } from 'enzyme'
import snap from 'snap'
import Menu from './menu'
import { mapDispatchToProps } from './menu.container'

const snapshot = props => snap(Menu)({ onHeaderClick: () => {}, onFooterClick: () => {}, ...props })

describe('common/Menu', () => {
  it('should have a default behaviour', snapshot({}))
  it('should add custom className', snapshot({ className: 'custom' }))
  it('should add custom style', snapshot({ style: { backgroundColor: 'red' } }))
  it('should add a header', snapshot({ header: <div>header</div> }))
  it('should add a footer', snapshot({ footer: <div>footer</div> }))
  it('should add items', snapshot({ children: [<div key={1}>1</div>, <div key={2}>2</div>] }))

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
