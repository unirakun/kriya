import React from 'react'
import BottomSheets from '../bottomSheets.container'

export default config => Component => props => (
  <BottomSheets {...config}>
    <Component {...props} />
  </BottomSheets>
)
