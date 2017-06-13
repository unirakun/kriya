import React from 'react'
import Input from './components/input'
import Group from './components/group'
import Popover from './components/popover'
import { Awesome } from './components/popovers'
import Tabs from '../lib/tabs'
import styles from './app.styles.scss'

const App = () => {
  return (
    <div className={styles.app}>
      {/* POPOVERS */}
      <Awesome />

      {/* TABS */}
      <Tabs />

      {/* INPUT */}
      <Input />
      {/* INPUT IN GROUP */}
      <Group />
      {/* POPOVERS ACTION */}
      <Popover />
    </div>
  )
}

export default App
