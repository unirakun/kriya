import { connect } from 'react-redux'
import { clickHeader, clickFooter } from './menu.actions'
import Component from './menu'

export const mapDispatchToProps = (dispatch) => {
  return {
    onHeaderClick: () => dispatch(clickHeader()),
    onFooterClick: () => dispatch(clickFooter()),
  }
}

export default connect(undefined, mapDispatchToProps)(Component)
