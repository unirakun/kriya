import { PropTypes } from 'react'
import { connect } from 'react-redux'
import Component from './button'

const mapDispatchToProps = (dispatch, { name }) => {
  return {
    onClick: (e) => {
      e.preventDefault()
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