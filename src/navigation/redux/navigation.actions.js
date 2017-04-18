export const ADD_STEP = 'NAVIGATION_ADD_STEP'
export const addStep = step => ({ type: ADD_STEP, payload: step })

export const RESET_STEPS = 'NAVIGATION_RESET_STEPS'
export const resetSteps = () => ({ type: RESET_STEPS })

export const CLICKED = 'NAVIGATION_CLICKED'
export const click = number => ({ type: CLICKED, payload: number })
