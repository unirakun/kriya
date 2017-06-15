import React from 'react'
import Popover from '../popover.container'

export default config => Component => props => (
  <Popover {...config}>
    <Component {...props} />
  </Popover>
)
