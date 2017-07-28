/* eslint-disable
  import/no-extraneous-dependencies,
  react/jsx-filename-extension,
  react/no-children-prop,
  react/prop-types,
*/
/* eslint-env jest */

import React from 'react'
import snap from 'snap'
import tooltip from './tooltip'

const Child = props => <div title="child">{JSON.stringify(props)}</div>

describe('common/Tooltip/hoc', () => {
  it('should pass config to the tooltip component', () => {
    const Wrapper = tooltip({ left: true })('TEXT')(Child)
    snap(Wrapper)()()
  })

  it('should pass props to the wrapped component', () => {
    const Wrapper = tooltip()('TEXT')(Child)
    snap(Wrapper)({ prop: 'a prop', and: 'an other' })()
  })
})

/* eslint-enable
  import/no-extraneous-dependencies,
  react/jsx-filename-extension,
  react/no-children-prop,
  react/prop-types,
*/
