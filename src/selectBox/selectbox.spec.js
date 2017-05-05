/* eslint-disable import/no-extraneous-dependencies, react/jsx-filename-extension */
/* eslint-env jest */

import React from 'react'
import renderer from 'react-test-renderer'
import { reduxForm } from 'redux-form'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import mockComponent from '__mocks__/component'
import SelectBox from './selectBox.jsx'
import SelectBoxContainer from './selectBox.container'

jest.mock('kriya-select', () => mockComponent('kriya-select'))

const Decorated = reduxForm({ form: 'testForm' })(SelectBox)
const DecoratedContainer = reduxForm({ form: 'formCont' })(SelectBoxContainer)

const snap = ({ name = 'name', ...rest }) => {
  const store = createStore(() => ({}))
  const component = renderer.create(
    <Provider store={store}>
      <Decorated {...rest} name={name} />
    </Provider>,
  )

  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
}

describe('common/SelectBox', () => {
  describe('graphical (JSX)', () => {
    it('should have a default behaviour', () => snap({}))
    it('should add custom className', () => snap({ className: 'custom' }))
    it('should add custom style', () => snap({ style: { backgroundColor: 'red' } }))
    it('should add options', () => snap(
      {
        options: [
          { label: 'Chirurgiens cardio-vasculaires et thoraciques', value: '1' },
          { label: 'Chirurgiens de la face et du cou', value: '2' },
          { label: 'Chirurgiens de la main', value: '3' },
        ],
      }),
    )

    describe('labels', () => {
      it('should print a label', () => snap({ label: 'my label' }))
      it('should print a * on label when input is required', () => snap({ required: true, label: 'my label' }))
    })
  })

  describe('container', () => {
    const snapContainer = (state, props) => {
      const store = createStore(() => (
        {
          form: {
            form1: {
              values: {
                field1: '1',
              },
            },
          },
        }
      ))
      const component = renderer.create(
        <Provider store={store}>
          <DecoratedContainer {...props} />
        </Provider>,
      )

      const tree = component.toJSON()
      expect(tree).toMatchSnapshot()
    }

    it('should pass value of redux form', () => snapContainer({}, {
      form: 'form1',
      name: 'field1',
      options: [
        { label: 'Chirurgiens cardio-vasculaires et thoraciques', value: '1' },
        { label: 'Chirurgiens de la face et du cou', value: '2' },
        { label: 'Chirurgiens de la main', value: '3' },
      ],
    }))
  })
})

/* eslint-enable import/no-extraneous-dependencies, react/jsx-filename-extension */
