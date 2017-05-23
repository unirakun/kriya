/* eslint-disable import/no-extraneous-dependencies, react/jsx-filename-extension */
/* eslint-env jest */
import React from 'react'
import renderer from 'react-test-renderer'
import mockComponent from '__mocks__/component'
import Tab from './tab'
import { mapStateToProps, mapDispatchToProps } from './tab.container'

jest.mock('react-ink', () => mockComponent('ink'))

const snapshot = model => expect(model).toMatchSnapshot()
const snap = (props) => {
  const component = renderer.create(
    <Tab onClick={() => {}} {...props} />,
  )

  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
}

describe('common/tabs/tab', () => {
  describe('graphical (JSX)', () => {
    it('should add custom className', () => snap({ className: 'custom' }))
    it('should add custom style', () => snap({ style: { backgroundColor: 'red' } }))
    it('should have a default behaviour', () => snap({}))
    it('should pass a label', () => snap({ label: 'a label' }))
    it('should activate the tab', () => snap({ activated: true }))
  })

  describe('container', () => {
    const state = {
      ui: {
        tabs: {
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

    it('should maps isActivated and tabs information', () => snapshot(mapStateToProps(state, { code: 'FIND' })))
    it('should map an isActivated to false', () => snapshot(mapStateToProps(state, { code: 'CHOOSE' })))
    it('should dispatch a TAB_CLICKED event', () => {
      const dispatch = jest.fn()
      const props = mapDispatchToProps(dispatch, { code: 'FIND' })

      props.onClick()

      expect(dispatch.mock.calls.length).toBe(1)
      expect(dispatch.mock.calls[0]).toEqual([{ type: 'TAB_CLICKED', payload: 'FIND' }])
    })
  })
})

/* eslint-enable import/no-extraneous-dependencies, react/jsx-filename-extension */
