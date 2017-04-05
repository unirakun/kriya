/* eslint-disable import/no-extraneous-dependencies, react/jsx-filename-extension */
/* eslint-env jest */

import React from 'react'
import renderer from 'react-test-renderer'
import { reduxForm } from 'redux-form'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import Input from './input'

const store = createStore(() => ({}))
const Decorated = reduxForm({ form: 'testForm' })(Input)

const snap = ({ name = 'name', ...rest }) => {
  const component = renderer.create(
    <Provider store={store}>
      <Decorated {...rest} name={name} />
    </Provider>,
  )

  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
}

describe('common/Input', () => {
  it('should have a default behaviour', () => snap({}))
  it('should add custom className', () => snap({ className: 'custom' }))
  it('should add custom style', () => snap({ style: { backgroundColor: 'red' } }))

  describe('labels', () => {
    it('should print a label', () => snap({ label: 'my label' }))
    it('should print a * on label when input is required', () => snap({ required: true, label: 'my label' }))
  })

  it('should print an icon when this is a select', () => snap({ type: 'select' }))
  it('should print the placeholder', () => snap({ type: 'input', placeholder: 'My placeholder' }))
  it('should be disabled', () => snap({ type: 'input', disabled: true }))

  describe('types', () => {
    it('should print a textarea', () => snap({ type: 'textarea' }))
    it('should print a select', () => snap({ type: 'select' }))
    it('should print an input (input)', () => snap({ type: 'input' }))
    it('should print an input (checkbox)', () => snap({ type: 'checkbox' }))
    it('should print an input (radio)', () => snap({ type: 'radio' }))
    it('should print an input (number)', () => snap({ type: 'number' }))

    const options = [
      { id: 'o1', label: 'l1' },
      { id: 'o4', label: 'l4' },
      { id: 'o2', label: 'l2' },
      { id: 'o3', label: 'l3' },
    ]
    it('should print options on select', () => snap({ type: 'select', options }))
    it('shouldnt print options (not select)', () => snap({ type: 'input', options }))
  })
})

/* eslint-enable import/no-extraneous-dependencies, react/jsx-filename-extension */
