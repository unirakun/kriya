import { connect } from 'react-redux'
import { open, isOpened } from './redux'
import Component from './card'

const mapStateToProps = (state, { name }) => {
  return {
    closed: !isOpened(state)(name),
  }
}

const mapDispatchToProps = (dispatch, { name, onClick }) => {
  return {
    onClick: closed => (e) => {
      e.preventDefault()
      e.stopPropagation()

      if (onClick) onClick(e)
      if (closed) dispatch(open(name))
    },
  }
}

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  return {
    ...stateProps,
    ...dispatchProps,
    onClick: dispatchProps.onClick(stateProps.closed),
    ...ownProps,
  }
}

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(Component)
