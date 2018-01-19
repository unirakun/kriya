import React, { Component } from 'react'
import PropTypes from 'prop-types'

export const addDelay = (prevProps, props, defaultDelay, timer) => {
  const { title, type, remove, delay } = props
  if (prevProps.title !== title || prevProps.type !== type) {
    if (timer) clearTimeout(timer)
    return setTimeout(remove, delay || defaultDelay)
  }
  return timer
}

const addDelayBeforeRemove = defaultDelay => (WrappedComponent) => {
  class WrapperToast extends Component {

    componentDidUpdate(prevProps) {
      this.timer = addDelay(prevProps, this.props, defaultDelay, this.timer)
    }

    componentWillUnmount() {
      clearTimeout(this.timer)
    }

    render() {
      // title is required, so if title is undefined, toast is hide
      return <WrappedComponent {...this.props} print={!!this.props.title} />
    }
  }

  WrapperToast.propTypes = {
    title: PropTypes.string,
  }

  WrapperToast.defaultProps = {
    title: undefined,
  }

  return WrapperToast
}

export default addDelayBeforeRemove
