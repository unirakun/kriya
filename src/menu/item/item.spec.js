/* eslint-disable import/no-extraneous-dependencies, react/jsx-filename-extension */
/* eslint-env jest */
import mockComponent from '__mocks__/component'
import snap from 'snap'
import Item from './item'
import { mapStateToProps } from './item.container'

jest.mock('../../button', () => mockComponent('button'))

const snapshot = snap(Item)

describe('common/Item', () => {
  describe('graphical (JSX)', () => {
    it('should add custom className', snapshot({ className: 'custom' }))
    it('should add custom style', snapshot({ style: { backgroundColor: 'red' } }))
    it('should have a default behaviour', snapshot({}))
    it('should take a name', snapshot({ name: 'a name' }))
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

    const snapMapState = (state, props) => expect(mapStateToProps(state, props)).toMatchSnapshot()

    it('should inject selected for a simple route', () => snapMapState(initState, { title: 'RESULT_1' }))
    it('should inject selected for a nested route', () => snapMapState(initState, { title: 'RESULT_3' }))
    it('should inject selected for a simple route, with list', () => snapMapState(initState, { title: ['OUPS', 'RESULT_1'] }))
    it('should inject selected for a nested route, with list', () => snapMapState(initState, { title: ['OUPS', 'RESULT_3'] }))
    it('should not inject selected', () => snapMapState(initState, { title: 'OUPS' }))
    it('should not inject selected, with list', () => snapMapState(initState, { title: ['OUPS', 'OUPS2'] }))
  })
})

/* eslint-enable import/no-extraneous-dependencies, react/jsx-filename-extension */
