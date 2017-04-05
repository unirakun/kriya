import { connect } from 'react-redux'
import { closePopover, getPopover } from './redux'
import Component from './popover'

const mapStateToProps = (state, { code }) => {
  return {
    print: getPopover(state)[code],
  }
}

const mapDispatchToProps = (dispatch, { closable, code }) => {
  if (!closable) return {}

  return {
    onClose: () => dispatch(closePopover(code)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Component)
