import { connect } from 'react-redux'
import Component from './toast'

import { getCurrentToast, close, remove } from './redux'

const mapStateToProps = (state, { position }) => {
  return {
    ...getCurrentToast(state),
    position,
  }
}
const mapDisptachToProps = (dispatch) => {
  return {
    close: (handler) => {
      if (handler) handler()
      dispatch(close())
      return setTimeout(() => dispatch(remove()), 1000)
    },
  }
}

export default connect(mapStateToProps, mapDisptachToProps)(Component)
