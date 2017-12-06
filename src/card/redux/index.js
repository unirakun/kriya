import cards from './card'
import * as actions from './card.actions'
import * as selectors from './card.selectors'

Object.assign(cards, actions, selectors)

export * from './card.actions'
export * from './card.selectors'
export default cards

