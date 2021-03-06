/* eslint-disable import/no-extraneous-dependencies, react/jsx-filename-extension */
/* eslint-env jest */

import React from 'react'
import renderer from 'react-test-renderer'
import { reduxForm, reducer as reduxFormReducer } from 'redux-form'
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import { mount } from 'enzyme'
import mockComponent from '__mocks__/component'
import Input from './input'
import InputContainer from './input.container'

jest.mock('kriya-select', () => mockComponent('kriya-select'))

jest.mock('./checkbox', () => mockComponent('checkbox'))

const Decorated = reduxForm({ form: 'testForm' })(Input)
const DecoratedContainer = reduxForm({ form: 'formCont' })(InputContainer)


const createInput = (props) => {
  const store = createStore(() => ({}))
  return (
    <Provider store={store}>
      <Decorated {...props} />
    </Provider>
  )
}

const snap = (props) => {
  const input = createInput({ name: 'name', ...props })
  const component = renderer.create(input)
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
}

describe('common/Input', () => {
  describe('graphical (JSX)', () => {
    it('should have a default behaviour', () => snap({}))
    it('should add custom className', () => snap({ className: 'custom' }))
    it('should add custom style', () => snap({ style: { backgroundColor: 'red' } }))

    describe('labels', () => {
      it('should print a label', () => snap({ label: 'my label' }))
      it('should print a * on label when input is required', () => snap({
        required: true,
        label: 'my label',
      }))
    })

    describe('error', () => {
      it('should print an error', () => snap({ error: 'my error' }))
    })

    it('should print an icon when this is a select', () => snap({ type: 'select' }))
    it('should print the placeholder', () => snap({ type: 'text', placeholder: 'My placeholder' }))
    it('should be disabled', () => snap({ type: 'text', disabled: true }))

    describe('types', () => {
      it('should print a textarea', () => snap({ type: 'textarea' }))
      it('should print a select', () => snap({ type: 'select' }))
      it('should print a selectbox', () => snap({ type: 'selectbox' }))
      it('should print an input (checkbox)', () => snap({ type: 'checkbox' }))
      it('should print an input (radio)', () => snap({ type: 'radio' }))
      it('should print an input (number)', () => snap({ type: 'number' }))

      const options = [
        { value: 'o1', label: 'l1' },
        { value: 'o4', label: 'l4' },
        { value: 'o2', label: 'l2' },
        { value: 'o3', label: 'l3' },
      ]
      it('should print options on select', () => snap({ type: 'select', options }))
      it('should print options on selectbox', () => snap({ type: 'selectbox', options }))
      it('shouldnt print options (not select)', () => snap({ type: 'text', options }))
    })
  })
  describe('container', () => {
    const snapContainer = (state, props) => {
      const form = {
        form1: {
          values: {
            field1: '1',
          },
        },
      }
      const reducer = combineReducers({ form: reduxFormReducer })
      const store = createStore(reducer, { form })

      const component = renderer.create(
        <Provider store={store}>
          <DecoratedContainer {...props} />
        </Provider>,
      )

      const tree = component.toJSON()
      expect(tree).toMatchSnapshot()
    }

    it('show placeholder on label when value is not empty', () => snapContainer({}, {
      form: 'form1',
      name: 'field1',
      placeholder: 'placeholder',
      type: 'text',
    }))

    it('hidden label when withoutLabel is true', () => snapContainer({}, {
      form: 'form1',
      name: 'field1',
      withoutLabel: true,
      label: 'label',
      type: 'text',
    }))

    it('show label when withoutLabel is false', () => snapContainer({}, {
      form: 'form1',
      name: 'field1',
      withoutLabel: false,
      label: 'label',
      type: 'text',
    }))

    it('should pass value of redux form for select', () => snapContainer({}, {
      form: 'form1',
      name: 'field1',
      options: [
        { value: 'o1', label: 'l1' },
        { value: 'o4', label: 'l4' },
        { value: 'o2', label: 'l2' },
        { value: 'o3', label: 'l3' },
      ],
      type: 'select',
    }))

    it('should pass value of redux form for selectbox', () => snapContainer({}, {
      form: 'form1',
      name: 'field1',
      options: [
        { value: 'o1', label: 'l1' },
        { value: 'o4', label: 'l4' },
        { value: 'o2', label: 'l2' },
        { value: 'o3', label: 'l3' },
      ],
      type: 'selectbox',
    }))
  })
  describe('callbacks', () => {
    it('should call onPaste function', () => {
      const onPaste = jest.fn()
      const input = createInput({ name: 'test', onPaste })
      const wrapper = mount(input)
      wrapper.find('input').first().simulate('paste')
      expect(onPaste.mock.calls.length).toBe(1)
    })

    it('should call normalize function', () => {
      const normalize = jest.fn()
      const input = createInput({ name: 'test', normalize })
      const wrapper = mount(input)
      wrapper.find('input').first().simulate('change', { target: { value: 'test' } })
      expect(normalize.mock.calls.length).toBe(1)
    })
  })
})

/* eslint-enable import/no-extraneous-dependencies, react/jsx-filename-extension */
