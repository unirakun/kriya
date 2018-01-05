import { connect } from 'react-redux'
import Component from './toast'
import { create } from '../../../src/toast/redux'


const mapDispatchToProps = (dispatch) => {
  return {
    onClickDefault: () => dispatch(create({ code: 'toast1', title: 'Default' })),
    onClickSuccess: () => dispatch(create({ code: 'toast2', title: 'Success', type: 'success' })),
    onClickWarning: () => dispatch(create({ code: 'toast3', title: 'Warning', type: 'warning' })),
    onClickError: () => dispatch(create({ code: 'toast4', title: 'Error', type: 'error' })),
    onClickButton: () => dispatch(create({ code: 'toast5', title: 'With Button', button: { text: 'cancel', onClick: () => console.log('my action') } })),
  }
}

export default connect(undefined, mapDispatchToProps)(Component)
