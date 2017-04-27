import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { onlyUpdateForPropTypes } from 'recompose'
import ImgFallback from 'react-img-fallback'
import Icon from '../icon'
import styles from '../../src/avatar/avatar.styles.scss'

const Avatar = ({ style, className, picture, isMale, onClick }) => {
  const classes = classnames(
    styles.avatar,
    className,
  )

  const fallback = (
    <Icon className={styles.icon} primary>
      {`avatar_${isMale ? 'man' : 'woman'}`}
    </Icon>
  )

  return (
    <div style={style} className={classes} onClick={onClick}>
      <ImgFallback
        className={styles.img}
        src={picture}
        alt="avatar"
        fallback={fallback}
      />
    </div>
  )
}

Avatar.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
  picture: PropTypes.string,
  isMale: PropTypes.bool,
  onClick: PropTypes.func,
}

Avatar.defaultProps = {
  style: {},
  className: '',
  picture: undefined,
  isMale: false,
  onClick: undefined,
}

export default onlyUpdateForPropTypes(Avatar)
