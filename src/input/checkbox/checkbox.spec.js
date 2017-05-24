/* eslint-disable import/no-extraneous-dependencies, react/jsx-filename-extension */
/* eslint-env jest */

import React from 'react'
import { mount } from 'enzyme'
import snap from 'snap'
import Checkbox from './checkbox'

const snapshot = snap(Checkbox)

describe('common/Input/Checkbox', () => {
  it('should have a default behaviour', snapshot({}))
  it('should add custom className', snapshot({ className: 'custom' }))
  it('should add custom style', snapshot({ style: { backgroundColor: 'red' } }))
  it('should be checked', snapshot({ input: { checked: true } }))

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
