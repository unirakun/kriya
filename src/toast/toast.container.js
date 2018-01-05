import { connect } from 'react-redux'
import { compose } from 'recompose'
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
    remove: () => dispatch(remove()),
  }
}
export default compose(
  connect(mapStateToProps, mapDisptachToProps),
  addDelayBeforeRemove(10000000),
)(Component)
