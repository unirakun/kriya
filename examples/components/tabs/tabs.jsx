import React from 'react'
import forRoute from '../../helpers/router'
import { Tabs as KriyaTabs } from '../../../components'
import styles from './tabs.styles.scss'

const Tabs = () => {
  return (
    <div className={styles.tabs}>
      <KriyaTabs />
    </div>
  )
}

export default forRoute('TABS')(Tabs)
