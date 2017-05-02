import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Component from './button'

const mapDispatchToProps = (dispatch, { name, href }) => {
  return {
    onClick: (e) => {
      if (!href) e.preventDefault()
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
