/* eslint-disable
  import/no-extraneous-dependencies,
  react/jsx-filename-extension,
  react/no-children-prop,
  react/prop-types,
*/
/* eslint-env jest */

import React from 'react'
import snap from 'snap'
import popover from './popover'

jest.mock('../popover.container', () => ({ children, ...props }) => <div>{JSON.stringify(props)}-{children}</div>)
const Child = props => <div title="child">{JSON.stringify(props)}</div>

describe('common/Popover/hoc', () => {
  it('should pass config to the popover component', () => {
    const Wrapper = popover({ code: 'a code' })(Child)
    snap(Wrapper)()()
  })

  it('should pass props to the wrapped component', () => {
    const Wrapper = popover()(Child)
    snap(Wrapper)({ prop: 'a prop', and: 'an other' })()
  })
})

/* eslint-enable
  import/no-extraneous-dependencies,
  react/jsx-filename-extension,
  react/no-children-prop,
  react/prop-types,
*/
