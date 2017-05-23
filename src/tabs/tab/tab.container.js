import { connect } from 'react-redux'
import { isActivated, getTab } from '../redux'
import Component from './tab'

export const mapStateToProps = (state, { code }) => {
  return {
    activated: isActivated(state)(code),
    ...getTab(state)(code),
  }
}

export const mapDispatchToProps = (dispatch, { code }) => {
  return {
    onClick: () => dispatch({ type: 'TAB_CLICKED', payload: code }),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Component)
