import { connect } from 'react-redux'
import { open } from '../../../src/bottomSheets/redux/bottomSheets.actions'
import Component from './bottomSheets'

const mapDispatchToProps = (dispatch) => {
  return {
    onClick: () => dispatch(open('awesome_detail', { content: 'U R AWESOME!' })),
  }
}

export default connect(undefined, mapDispatchToProps)(Component)
