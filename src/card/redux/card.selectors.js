export const getCards = state => state.ui.cards
export const getCard = state => id => getCards(state)[id]

export const isOpened = state => id => getCard(state)(id)
