import { connect } from 'react-redux'
import { openPopover } from '../../../src/popover/redux/popover.actions'
import Component from './popover'

const mapDispatchToProps = (dispatch) => {
  return {
    onClick: () => dispatch(openPopover('awesome', { description: 'U R AWESOME!' })),
  }
}

export default connect(undefined, mapDispatchToProps)(Component)
