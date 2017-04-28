/* eslint-disable import/no-extraneous-dependencies, react/jsx-filename-extension */
/* eslint-env jest */

import React from 'react'
import renderer from 'react-test-renderer'
import { mount } from 'enzyme'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { open } from './redux'
import Card from './card'
import CardContainer from './card.container'

describe('common/Card', () => {
  describe('graphical (JSX)', () => {
    const snap = (props, state = {}) => {
      const store = createStore(() => (state))
      /* eslint-disable react/no-children-prop */
      const component = renderer.create(
        <Provider store={store}>
          <Card {...props} />
        </Provider>,
      )
      /* eslint-enable react/no-children-prop */

      const tree = component.toJSON()
      expect(tree).toMatchSnapshot()
    }

    it('should add custom className', () => snap({ className: 'custom' }))
    it('should add custom style', () => snap({ style: { backgroundColor: 'red' } }))
    it('should have a default behaviour', () => snap({}))
    it('should print the closed element', () => snap({ closed: true, closeElm: 'close elm', children: 'children' }))
    it('should print the children', () => snap({ closed: false, closeElm: 'close elm', children: 'children' }))
  })

  describe('container', () => {
    const snap = (props, cards = {}) => {
      const dispatch = jest.fn()
      const store = createStore(() => ({ ui: { cards } }))
      store.dispatch = dispatch

      const wrapper = mount(
        <Provider store={store}>
          <CardContainer {...props} />
        </Provider>,
      )

      wrapper.find('.card').simulate('click')

      return dispatch
    }

    it('should call the given click', () => {
      let onClick = jest.fn()
      snap({ name: 'card1', onClick }, { card1: false })
      expect(onClick.mock.calls.length).toBe(1)

      onClick = jest.fn()
      snap({ name: 'card1', onClick }, { card1: true })
      expect(onClick.mock.calls.length).toBe(1)
    })

    it('should open the card', () => {
      const dispatch = snap({ name: 'card1' }, { card1: false })

      expect(dispatch.mock.calls.length).toBe(1)
      expect(dispatch.mock.calls[0]).toEqual([open('card1')])
    })

    it('should not close the card', () => {
      const dispatch = snap({ name: 'card1' }, { card1: true })

      expect(dispatch.mock.calls.length).toBe(0)
    })
  })
})

/* eslint-enable import/no-extraneous-dependencies, react/jsx-filename-extension */
