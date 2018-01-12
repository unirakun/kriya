import { connect } from 'react-redux'
import { compose } from 'recompose'
import addDelayBeforeRemove from './hoc'
import Component from './toast'
import { getToast, remove } from './redux'

const mapStateToProps = (state) => {
  return getToast(state)
}

const mapDisptachToProps = (dispatch, { button }) => {
  return {
    remove: () => dispatch(remove()),
    onClick: () => {
      button.onClick()
      dispatch(remove())
    },
  }
}

export default compose(
  connect(mapStateToProps, mapDisptachToProps),
  addDelayBeforeRemove(3000),
)(Component)
