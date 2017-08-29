import { connect } from 'react-redux'
import { close, get } from './redux'
import Component from './bottomSheets'

const mapStateToProps = (state, { code }) => {
  const bottomSheets = get(state)[code]
  if (!bottomSheets) return {}
  return bottomSheets
}

const mapDispatchToProps = (dispatch, { closable, code }) => {
  if (!closable) return {}

  return {
    onClose: () => dispatch(close(code)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Component)
