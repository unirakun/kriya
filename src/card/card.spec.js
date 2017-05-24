/* eslint-disable import/no-extraneous-dependencies, react/jsx-filename-extension */
/* eslint-env jest */

import React from 'react'
import { mount } from 'enzyme'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import snap from 'snap'
import { open } from './redux'
import Card from './card'
import CardContainer from './card.container'

const Child = props => <div>Children {JSON.stringify(props)}</div>

const snapshot = snap(Card)

describe('common/Card', () => {
  describe('graphical (JSX)', () => {
    it('should add custom className', snapshot({ className: 'custom' }))
    it('should add custom style', snapshot({ style: { backgroundColor: 'red' } }))
    it('should have a default behaviour', snapshot({}))
    it('should print the closed element', snapshot({ closed: true, closeElm: 'close elm', children: <Child /> }))
    it('should print the children', snapshot({ closed: false, closeElm: 'close elm', children: <Child /> }))
    it('should print the children with a closed prop', snapshot({ closed: true, children: <Child /> }))
  })

  describe('container', () => {
    const snapContainer = (props, cards = {}) => {
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
      snapContainer({ name: 'card1', onClick }, { card1: false })
      expect(onClick.mock.calls.length).toBe(1)

      onClick = jest.fn()
      snapContainer({ name: 'card1', onClick }, { card1: true })
      expect(onClick.mock.calls.length).toBe(1)
    })

    it('should open the card', () => {
      const dispatch = snapContainer({ name: 'card1' }, { card1: false })

      expect(dispatch.mock.calls.length).toBe(1)
      expect(dispatch.mock.calls[0]).toEqual([open('card1')])
    })

    it('should not close the card', () => {
      const dispatch = snapContainer({ name: 'card1' }, { card1: true })

      expect(dispatch.mock.calls.length).toBe(0)
    })
  })
})

/* eslint-enable import/no-extraneous-dependencies, react/jsx-filename-extension */
