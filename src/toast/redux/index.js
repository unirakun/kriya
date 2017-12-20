import toast from './toast'
import * as actions from './toast.actions'
import * as selectors from './toast.selectors'

Object.assign(toast, actions, selectors)

export * from './toast.actions'
export * from './toast.selectors'
export default toast

