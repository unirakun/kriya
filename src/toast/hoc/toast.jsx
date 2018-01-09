import React, { Component } from 'react'

export const addDelay = (prevProps, props, defaultDelay, timer) => {
  const { title, type, remove, delay } = props
  if (prevProps.title !== title || prevProps.type !== type) {
    if (timer) clearTimeout(timer)
    return setTimeout(remove, delay || defaultDelay)
  }
  return timer
}

const addDelayBeforeRemove = defaultDelay => (WrappedComponent) => {
  return class extends Component {

    componentDidUpdate(prevProps) {
      this.timer = addDelay(prevProps, this.props, defaultDelay, this.timer)
    }

    componentWillUnmount() {
      clearTimeout(this.timer)
    }

    render() {
      return <WrappedComponent {...this.props} />
    }
  }
}

export default addDelayBeforeRemove
