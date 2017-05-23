import React from 'react'
import Input from './components/input'
import Group from './components/group'
import Tabs from '../lib/tabs'
import styles from './app.styles.scss'

const App = () => {
  return (
    <div className={styles.app}>
      {/* TABS */}
      <Tabs />

      {/* INPUT */}
      <Input />
      {/* INPUT IN GROUP */}
      <Group />
    </div>
  )
}

export default App
