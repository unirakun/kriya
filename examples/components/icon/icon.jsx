import React from 'react'
import PropTypes from 'prop-types'
import router from 'hoc-little-router'
import classnames from 'classnames'
import { onlyUpdateForPropTypes } from 'recompose'
import Icon from '../../../src/icon'
import styles from './icon.styles.scss'

const IconExample = ({ style, className }) => {
  const classes = classnames(
    styles.example,
    className,
  )

  return (
    <div style={style} className={classes}>
      <h1>Examples ICON</h1>
      {/* form input */}
      <h2>default</h2>
      <div className={styles.item}>
        <Icon name={name} alt="neutral">sentiment_neutral</Icon>
      </div>
      <h2>primary / disabled / secondary / iconColor</h2>
      <div className={styles.item}>
        <Icon name={name} primary alt="very dissatisfied">sentiment_very_dissatisfied</Icon>
        <Icon name={name} disabled alt="neutral">sentiment_neutral</Icon>
        <Icon name={name} secondary alt="very satisfied">sentiment_very_satisfied</Icon>
        <Icon name={name} iconColor alt="very satisfied">sentiment_very_satisfied</Icon>
      </div>
      <h2>Label Left / Right</h2>
      <div className={styles.item}>
        <Icon name={name} primary labelLeft="very dissatisfied">sentiment_very_dissatisfied</Icon>
        <Icon name={name} primary labelLeft="dissatisfied">sentiment_dissatisfied</Icon>
        <Icon name={name} disabled labelRight="neutral" labelLeft="neutral" alt="all neutral">sentiment_neutral</Icon>
        <Icon name={name} secondary labelRight="satisfied">sentiment_satisfied</Icon>
        <Icon name={name} secondary labelRight="very satisfied">sentiment_very_satisfied</Icon>
      </div>
    </div>
  )
}

IconExample.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
}

IconExample.defaultProps = {
  style: {},
  className: '',
}

export default router('ICON')(onlyUpdateForPropTypes(IconExample))
