/* eslint-disable import/no-extraneous-dependencies, react/jsx-filename-extension */
/* eslint-env jest */

import React from 'react'
import renderer from 'react-test-renderer'
import { reduxForm } from 'redux-form'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import mockComponent from '__mocks__/component'
import SelectBox from './selectBox.jsx'

jest.mock('react-select', () => mockComponent('react-select'))

const store = createStore(() => ({}))
const Decorated = reduxForm({ form: 'testForm' })(SelectBox)

const snap = ({ name = 'name', ...rest }) => {
  const component = renderer.create(
    <Provider store={store}>
      <Decorated {...rest} name={name} />
    </Provider>,
  )

  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
}

describe('common/SelectBox', () => {
  it('should have a default behaviour', () => snap({}))
  it('should add custom className', () => snap({ className: 'custom' }))
  it('should add custom style', () => snap({ style: { backgroundColor: 'red' } }))

  describe('labels', () => {
    it('should print a label', () => snap({ label: 'my label' }))
    it('should print a * on label when input is required', () => snap({ required: true, label: 'my label' }))
  })
})

/* eslint-enable import/no-extraneous-dependencies, react/jsx-filename-extension */
