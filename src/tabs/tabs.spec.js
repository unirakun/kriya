/* eslint-disable import/no-extraneous-dependencies, react/jsx-filename-extension */
/* eslint-env jest */
import snap from 'snap'
import mockComponent from '__mocks__/component'
import Tabs from './tabs'
import { mapStateToProps } from './tabs.container'

jest.mock('./tab', () => mockComponent('tab'))

const snapshot = props => snap(Tabs)({ onClick: () => {}, ...props })

describe('common/tabs', () => {
  describe('graphical (JSX)', () => {
    it('should add custom className', snapshot({ className: 'custom' }))
    it('should add custom style', snapshot({ style: { backgroundColor: 'red' } }))
    it('should have a default behaviour', snapshot({}))
    it('should prints children', snapshot({ children: ['first', 'second'] }))
    it('should prints tabs', snapshot({ children: 'a child', tabs: ['CHOOSE', 'SEARCH'] }))
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

    const snapObject = model => expect(model).toMatchSnapshot()

    it('should maps tabs keys to props', () => snapObject(mapStateToProps(state, {})))
    it('should not map if children in props', () => snapObject(mapStateToProps(state, { children: 'a child' })))
  })
})

/* eslint-enable import/no-extraneous-dependencies, react/jsx-filename-extension */
