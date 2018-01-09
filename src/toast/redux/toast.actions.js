export const CREATE_TOAST = 'CREATE_TOAST'

const action = type =>
  (title, options) =>
  ({ type: CREATE_TOAST, payload: { title, type, ...options } })

export const create = (title, options) => action()(title, options)
Object.assign(create, {
  success: action('success'),
  warning: action('warning'),
  error: action('error'),
})


export const REMOVE_TOAST = 'REMOVE_TOAST'
export const remove = () => ({ type: REMOVE_TOAST })
