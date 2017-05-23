/* eslint-disable import/no-extraneous-dependencies, react/jsx-filename-extension */
/* eslint-env jest */

import React from 'react'
import renderer from 'react-test-renderer'
import mockComponent from '__mocks__/component'
import Tabs from './tabs'
import { mapStateToProps } from './tabs.container'

jest.mock('./tab', () => mockComponent('tab'))

const snapshot = model => expect(model).toMatchSnapshot()

const snap = (props) => {
  const component = renderer.create(
    <Tabs onClick={() => {}} {...props} />,
  )

  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
}

describe('common/tabs', () => {
  describe('graphical (JSX)', () => {
    it('should add custom className', () => snap({ className: 'custom' }))
    it('should add custom style', () => snap({ style: { backgroundColor: 'red' } }))
    it('should have a default behaviour', () => snap({}))
    it('should prints children', () => snap({ children: ['first', 'second'] }))
    it('should prints tabs', () => snap({ children: 'a child', tabs: ['CHOOSE', 'SEARCH'] }))
  })

  describe('container', () => {
    const state = {
      ui: {
        tabs: {
          keys: ['CHOOSE', 'FIND'],
          activated: 'FIND',
          data: {
            CHOOSE: {
              code: 'CHOOSE',
              label: 'A choose label',
              an: 'other choose property',
            },
            FIND: {
              code: 'FIND',
              label: 'A find label',
              an: 'other find property',
            },
          },
        },
      },
    }

    it('should maps tabs keys to props', () => snapshot(mapStateToProps(state, {})))
    it('should not map if children in props', () => snapshot(mapStateToProps(state, { children: 'a child' })))
  })
})

/* eslint-enable import/no-extraneous-dependencies, react/jsx-filename-extension */
