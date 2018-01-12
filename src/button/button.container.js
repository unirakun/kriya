import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Component from './button'

const mapDispatchToProps = (dispatch, { name, href, type, onClick }) => {
  return {
    onClick: (e) => {
      onClick && onClick()
      if (!href && type !== 'submit') e.preventDefault()
      e.stopPropagation()
      dispatch({ type: `BTN_CLICKED_${name}` })
    },
  }
}

const ConnectedComponent = connect(undefined, mapDispatchToProps)(Component)
ConnectedComponent.propTypes = {
  name: PropTypes.string.isRequired,
}

export default ConnectedComponent
