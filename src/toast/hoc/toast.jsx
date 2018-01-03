import { lifecycle } from 'recompose'

let timer = null

export const addDelay = (prevProps, props, defaultDelay) => {
  const { print, code, remove, delay } = props
  if ((prevProps.code !== code) && print) {
    if (timer) clearTimeout(timer)
    timer = setTimeout(remove, delay || defaultDelay)
  }
}

export default defaultDelay => Component => lifecycle({
  componentDidUpdate(prevProps) {
    return addDelay(prevProps, this.props, defaultDelay)
  },
})(Component)

