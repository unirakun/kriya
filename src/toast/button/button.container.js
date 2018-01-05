import { connect } from 'react-redux'
import Component from './button'
import { remove } from '../redux'


const mapDispatchToProps = (dispatch, { onClick }) => {
  return {
    onClick: () => {
      if (onClick) onClick()
      dispatch(remove())
    },
  }
}
export default connect(undefined, mapDispatchToProps)(Component)
