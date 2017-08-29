import React from 'react'
import BottomSheets from '../../../../src/bottomSheets'
import DetailCard from './detail'

export default () => {
  return (
    <BottomSheets code="awesome_detail" closable>
      <DetailCard />
    </BottomSheets>
  )
}
