import { connect } from 'react-redux'
import { openPopover } from '../../../src/popover/redux/popover.actions'
import Component from './popover'

const mapDispatchToProps = (dispatch) => {
  return {
    onClickAwesome: () => dispatch(openPopover('awesome', { description: 'U R AWESOME!' })),
    onClickNormal: () => dispatch(openPopover('awesome')),
  }
}

export default connect(undefined, mapDispatchToProps)(Component)
