import { forRoute } from '@k-redux-router/react-redux'

export default code => Component => forRoute(code, { getState: state => state.router })(Component)
