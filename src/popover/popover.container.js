import { connect } from 'react-redux'
import { closePopover, getPopover } from './redux'
import Component from './popover'

const mapStateToProps = (state, { code }) => {
  const popover = getPopover(state)[code]
  if (!popover) return {}
  return popover
}

const mapDispatchToProps = (dispatch, { closable, code }) => {
  if (!closable) return {}

  return {
    onClose: () => dispatch(closePopover(code)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Component)
