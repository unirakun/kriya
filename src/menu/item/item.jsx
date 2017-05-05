import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { onlyUpdateForPropTypes } from 'recompose'
import Button from '../../button'
import styles from '../../../src/menu/item/item.styles.scss'

const Item = ({ style, className, children, name, selected }) => {
  const classes = classnames(
    styles.item,
    className,
    {
      [styles.selected]: selected,
    },
  )

  return (
    <Button style={style} className={classes} large name={`MENU-ITEM-${name}`}>
      {children}
    </Button>
  )
}

Item.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
  children: PropTypes.node,
  name: PropTypes.string,
  selected: PropTypes.bool,
}

Item.defaultProps = {
  style: {},
  className: '',
  children: undefined,
  name: undefined,
  selected: false,
}

export default onlyUpdateForPropTypes(Item)
