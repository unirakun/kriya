import { connect } from 'react-redux'
import { toggle } from '../../../src/bottomSheets/redux/bottomSheets.actions'
import Component from './bottomSheets'

const mapDispatchToProps = (dispatch) => {
  return {
    onClick: () => dispatch(toggle('awesome_detail', { description: 'U R AWESOME!' })),
  }
}

export default connect(undefined, mapDispatchToProps)(Component)
