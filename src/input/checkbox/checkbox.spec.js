/* eslint-disable import/no-extraneous-dependencies, react/jsx-filename-extension */
/* eslint-env jest */

import React from 'react'
import renderer from 'react-test-renderer'
import { mount } from 'enzyme'
import Checkbox from './checkbox'

const snap = (props) => {
  const component = renderer.create(
    <Checkbox {...props} />,
  )

  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
}

describe('common/Input/Checkbox', () => {
  it('should have a default behaviour', () => snap({}))
  it('should add custom className', () => snap({ className: 'custom' }))
  it('should add custom style', () => snap({ style: { backgroundColor: 'red' } }))
  it('should be checked', () => snap({ input: { checked: true } }))

  describe('callbacks', () => {
    const onClickTest = (checked) => {
      const onClick = jest.fn()
      const wrapper = mount(
        <Checkbox input={{ checked, onChange: onClick }} />,
      )

      wrapper.find('div').first().simulate('click')
      expect(onClick.mock.calls.length).toBe(1)
      expect(onClick.mock.calls[0]).toEqual([!checked])
    }

    it('should swap checked onClick', () => onClickTest(true))
    it('should swap checked onClick', () => onClickTest(false))
  })
})

/* eslint-enable import/no-extraneous-dependencies, react/jsx-filename-extension */
