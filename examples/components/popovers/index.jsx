import React from 'react'
import Popover from '../../../src/popover'
import AwesomeCard from './awesome'

export const Awesome = () => {
  return (
    <Popover code="awesome" closable>
      <AwesomeCard />
    </Popover>
  )
}
