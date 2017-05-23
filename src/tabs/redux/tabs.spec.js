/* eslint-disable comma-dangle */
/* eslint-env jest */
import reducer from './tabs'
import { getActivated, getData, getTab, getTabs, isActivated } from './tabs.selectors'
import { activate, add, reset } from './tabs.actions'

const snap = object => expect(object).toMatchSnapshot()

describe('tabs/redux', () => {
  const state = {
    ui: {
      tabs: {
        keys: ['SEARCH', 'FIND'],
        data: {
          SEARCH: { label: 'Search' },
          FIND: { label: 'Find' },
        },
        activated: 'FIND',
      },
    },
  }

  describe('selectors', () => {
    it('should return tabs sub-reducer', () => snap(getTabs(state)))
    it('should return data', () => snap(getData(state)))
    it('should return tab', () => snap(getTab(state)('SEARCH')))
    it('should return tab -notfound-', () => snap(getTab(state)('LOOK')))
    it('should return activated tabs', () => snap(getActivated(state)))
    it('should return that FIND is activated', () => snap(isActivated(state)('FIND')))
  })

  describe('reducer', () => {
    const snapReduce = action => snap(reducer(getTabs(state), action))

    it('should initialize', () => snap(reducer()))
    it('should handle unknown action', () => expect(reducer(getTabs(state), { type: 'YO' })).toBe(getTabs(state)))
    it('should activate SEARCH tab', () => snapReduce(activate('SEARCH')))
    it('should add LOOK tab', () => snapReduce(add({ code: 'LOOK', label: 'Look up !' })))
    it('should reset tabs', () => snapReduce(reset()))
  })
})

/* eslint-enable comma-dangle */
