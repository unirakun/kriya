import { PUSH } from 'redux-little-router'

export const push = url => ({ type: PUSH, payload: url })
