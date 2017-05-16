import React from 'react'
import Input from './components/input'
import Group from './components/group'
import styles from './app.styles.scss'

const App = () => {
  return (
    <div className={styles.app}>
      {/* INPUT */}
      <Input />
      {/* INPUT IN GROUP */}
      <Group />
    </div>
  )
}

export default App
