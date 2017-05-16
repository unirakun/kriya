/* eslint-disable import/no-extraneous-dependencies, react/jsx-filename-extension */
/* eslint-env jest */

import React from 'react'
import renderer from 'react-test-renderer'
import mockComponent from '__mocks__/component'
import Item from './item'
import { mapStateToProps } from './item.container'

jest.mock('../../button', () => mockComponent('button'))

const component = (props) => {
  return renderer.create(
    <Item {...props} />,
  ).toJSON()
}

const connect = (props, initState) => {
  return JSON.stringify(mapStateToProps(initState, props))
}

const snap = (props, initState) => {
  const tree = initState ? connect(props, initState) : component(props)
  expect(tree).toMatchSnapshot()
}

describe('common/Item', () => {
  describe('graphical (JSX)', () => {
    it('should add custom className', () => snap({ className: 'custom' }))
    it('should add custom style', () => snap({ style: { backgroundColor: 'red' } }))
    it('should have a default behaviour', () => snap({}))
    it('should take a name', () => snap({ name: 'a name' }))
  })

  describe('container', () => {
    const initState = {
      router: {
        result: {
          title: 'RESULT_1',
          parent: {
            title: 'RESULT_2',
            parent: {
              title: 'RESULT_3',
            },
          },
        },
      },
    }

    it('should inject selected for a simple route', () => snap({ title: 'RESULT_1' }, initState))
    it('should inject selected for a nested route', () => snap({ title: 'RESULT_3' }, initState))
    it('should inject selected for a simple route, with list', () => snap({ title: ['OUPS', 'RESULT_1'] }, initState))
    it('should inject selected for a nested route, with list', () => snap({ title: ['OUPS', 'RESULT_3'] }, initState))
    it('should not inject selected', () => snap({ title: 'OUPS' }, initState))
    it('should not inject selected, with list', () => snap({ title: ['OUPS', 'OUPS2'] }, initState))
  })
})

/* eslint-enable import/no-extraneous-dependencies, react/jsx-filename-extension */
