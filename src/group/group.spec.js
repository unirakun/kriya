/* eslint-disable import/no-extraneous-dependencies, react/jsx-filename-extension */
/* eslint-env jest */
import snap from 'snap'
import mockComponent from '__mocks__/component'
import Group from './group'

const requiredProps = { children: mockComponent('input')({ prop1: 'test' }) }
const snapshot = props => snap(Group)({ onClick: () => {}, ...props })

describe('common/Group', () => {
  it('should have a default behaviour', snapshot(requiredProps))
  it('should add custom className', snapshot({ ...requiredProps, className: 'custom' }))
  it('should add custom style', snapshot({ ...requiredProps, style: { backgroundColor: 'red' } }))
  it('should add vertical class when vertical group', snapshot({ ...requiredProps, vertical: true }))
  it('should add withLabel props', snapshot({ ...requiredProps, withLabel: true }))
})

/* eslint-enable import/no-extraneous-dependencies, react/jsx-filename-extension */
