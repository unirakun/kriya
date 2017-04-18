import { connect } from 'react-redux'
import { click } from '../redux'
import Component from './step'

const mapDispatchToProps = (dispatch, { last, number }) => {
  if (last) return {}

  return {
    onClick: () => dispatch(click(number)),
  }
}

export default connect(undefined, mapDispatchToProps)(Component)
