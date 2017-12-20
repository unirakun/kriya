import { connect } from 'react-redux'
import Component from './toast'
import { open } from '../../../src/toast/redux'


const mapDispatchToProps = (dispatch) => {
  return {
    onClick: ({ title, type, button }) => dispatch(open({
      title,
      type,
      button,
    })),
  }
}

export default connect(null, mapDispatchToProps)(Component)
