import { connect } from 'react-redux'
import addDelayBeforeRemove from './hoc'
import Component from './toast'
import { getToast, remove } from './redux'

const mapStateToProps = (state) => {
  return {
    ...getToast(state),
  }
}
const mapDisptachToProps = (dispatch) => {
  return {
    remove: (handler) => {
      if (handler) handler()
      return dispatch(remove())
    },
  }
}
export default connect(mapStateToProps, mapDisptachToProps)(addDelayBeforeRemove(3000)(Component))
