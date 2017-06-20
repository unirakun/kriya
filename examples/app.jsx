import React from 'react'
import { Menu, MenuItem } from '../components'
import Input from './components/input'
import Group from './components/group'
import Popover from './components/popover'
import TabsScreen from './components/tabs'
import { Awesome } from './components/popovers'
import styles from './app.styles.scss'

const App = () => {
  return (
    <div className={styles.app}>
      {/* Menu */}
      <Menu className={styles.menu} footer={<div>Footer</div>} header={<div>Header</div>}>
        <MenuItem name="input" title='INPUT'>Inputs</MenuItem>
        <MenuItem name="group" title="GROUP">Group</MenuItem>
        <MenuItem name="popover" title="POPOVER">Popover</MenuItem>
        <MenuItem name="tabs" title="TABS">Tabs</MenuItem>
      </Menu>

      {/* POPOVERS */}
      <Awesome />

      {/* TABS */}
      <TabsScreen />

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
