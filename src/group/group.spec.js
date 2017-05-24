/* eslint-disable import/no-extraneous-dependencies, react/jsx-filename-extension */
/* eslint-env jest */
import snap from 'snap'
import Group from './group'

const snapshot = props => snap(Group)({ onClick: () => {}, ...props })

describe('common/Group', () => {
  it('should have a default behaviour', snapshot({}))
  it('should add custom className', snapshot({ className: 'custom' }))
  it('should add custom style', snapshot({ style: { backgroundColor: 'red' } }))
  it('should add children', snapshot({ children: 'a child' }))
  it('should add vertical class when vertical group', snapshot({ vertical: true }))
})

/* eslint-enable import/no-extraneous-dependencies, react/jsx-filename-extension */
