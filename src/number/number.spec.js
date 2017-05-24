/* eslint-disable import/no-extraneous-dependencies, react/jsx-filename-extension */
/* eslint-env jest */
import snap from 'snap'
import Number from './number'

const snapshot = snap(Number)

describe('common/Number', () => {
  describe('graphical (JSX)', () => {
    it('should add custom className', snapshot({ className: 'custom' }))
    it('should add custom style', snapshot({ style: { backgroundColor: 'red' } }))
    it('should add children', snapshot({ children: 'a child' }))
    it('should have a default behaviour', snapshot({}))
    it('should adapt for a map', snapshot({ map: true }))
    it('should be secondary', snapshot({ secondary: true }))
  })
})

/* eslint-enable import/no-extraneous-dependencies, react/jsx-filename-extension */
