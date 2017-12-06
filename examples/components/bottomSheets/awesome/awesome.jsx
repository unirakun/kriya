import React from 'react'
import Component from '../../../../src/bottomSheets'
import Header from './header'
import Detail from './detail'

export default () => {
  return (
    <Component header={<Header />} code="awesome_detail" closable>
      <Detail />
    </Component>
  )
}
