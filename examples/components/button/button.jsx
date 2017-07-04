import React from 'react'
import PropTypes from 'prop-types'
import router from 'hoc-little-router'
import classnames from 'classnames'
import { onlyUpdateForPropTypes } from 'recompose'
import Button from '../../../src/button'
import styles from './button.styles.scss'

const ButtonExample = ({ style, className }) => {
  const classes = classnames(
    styles.example,
    className,
  )

  return (
    <div style={style} className={classes}>
      <h1>Examples BUTTON</h1>
      {/* form input */}
      <h2>default</h2>
      <div className={styles.item}>
        <Button name={name}>default</Button>
      </div>
      <h2>Primary / Secondary / Disabled</h2>
      <div className={styles.item}>
        <Button name={name} primary>Primary</Button>
        <Button name={name} secondary>secondary</Button>
        <Button name={name} primary disabled>disabled</Button>
        <Button name={name} secondary disabled>disabled</Button>
      </div>
      <h2>FLAT</h2>
      <div className={styles.item}>
        <Button name={name} primary flat>Primary</Button>
        <Button name={name} secondary flat>secondary</Button>
      </div>
      <h2>LARGE</h2>
      <div className={styles.item}>
        <Button name={name} primary large>Primary</Button>
        <Button name={name} secondary large>secondary</Button>
      </div>
      <h2>FLAT & LARGE</h2>
      <div className={styles.item}>
        <Button name={name} primary flat large>Primary</Button>
        <Button name={name} secondary flat large>secondary</Button>
      </div>
    </div>
  )
}

ButtonExample.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
}

ButtonExample.defaultProps = {
  style: {},
  className: '',
}

export default router('BUTTON')(onlyUpdateForPropTypes(ButtonExample))
