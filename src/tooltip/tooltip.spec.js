/* eslint-disable import/no-extraneous-dependencies, react/jsx-filename-extension */
/* eslint-env jest */
import snap from 'snap'
import Tooltip from './tooltip'

const snapshot = snap(Tooltip)

describe('common/Tooltip', () => {
  describe('graphical (JSX)', () => {
    it('should add custom className', snapshot({ className: 'custom' }))
    it('should add custom style', snapshot({ style: { backgroundColor: 'red' } }))
    it('should add children', snapshot({ children: 'a child' }))
    it('should have a default behaviour', snapshot({}))
    it('should be visible', snapshot({ show: true }))
  })
})

/* eslint-enable import/no-extraneous-dependencies, react/jsx-filename-extension */
