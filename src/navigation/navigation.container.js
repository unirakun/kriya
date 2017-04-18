import { connect } from 'react-redux'
import { getNavigation } from './redux'
import Component from './navigation'

const mapStateToProps = (state) => {
  return {
    children: getNavigation(state),
  }
}

export default connect(mapStateToProps)(Component)
