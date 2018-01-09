import { connect } from 'react-redux'
import Component from './toast'
import { create } from '../../../src/toast/redux'


const mapDispatchToProps = (dispatch) => {
  return {
    onClickDefault: () => dispatch(create('Default :|')),
    onClickSuccess: () => dispatch(create.success('Success :D')),
    onClickWarning: () => dispatch(create('Warning :/', { type: 'warning' })),
    onClickError: () => dispatch(create.error('Error :(')),
    onClickButton: () => dispatch(create('With Button :)', { button: { text: 'cancel', onClick: () => console.log('my action') } })),
  }
}

export default connect(undefined, mapDispatchToProps)(Component)
