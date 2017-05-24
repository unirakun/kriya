/* eslint-disable import/no-extraneous-dependencies, react/jsx-filename-extension */
/* eslint-env jest */
import mockComponent from '__mocks__/component'
import snap from 'snap'
import Navigation from './navigation'

jest.mock('./step', () => mockComponent('step'))

const snapshot = props => snap(Navigation)({ children: [], ...props })

describe('common/Navigation', () => {
  describe('graphical (JSX)', () => {
    it('should add custom className', snapshot({ className: 'custom' }))
    it('should add custom style', snapshot({ style: { backgroundColor: 'red' } }))
    it('should have a default behaviour', snapshot({}))
    it('should handle one step', snapshot({ children: ['step 1'] }))
    it('should handle multiple steps', snapshot({ children: ['step 1', 'step 2'] }))
  })
})

/* eslint-enable import/no-extraneous-dependencies, react/jsx-filename-extension */
