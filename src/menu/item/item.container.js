import { connect } from 'react-redux'
import Component from './item'

const isRouteFound = (result, title) => {
  if (!result) return false
  if (Array.isArray(title)) return !!title.find(t => result.title === t)
  return result.title === title
}

export const mapStateToProps = (state, { title }) => {
  // We are looking top down the result tree
  let result = state.router.result
  let selected = isRouteFound(result, title)
  while (result && !selected) {
    result = result.parent
    selected = isRouteFound(result, title)
  }

  return {
    selected,
  }
}

export default connect(mapStateToProps)(Component)
