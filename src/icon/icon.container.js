import { connect } from 'react-redux'
import Component from './icon'

const defaultPrefix = ''

const mapStateToProps = (state) => {
  const prefix =
    (
      state
      && state.config
      && state.config.icon
      && state.config.icon.prefix
    ) || defaultPrefix

  return {
    prefix,
  }
}

export default connect(mapStateToProps)(Component)
