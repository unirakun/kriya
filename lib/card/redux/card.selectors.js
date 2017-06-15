export var getCards = function getCards(state) {
  return state.ui.cards;
};
export var getCard = function getCard(state) {
  return function (id) {
    return getCards(state)[id];
  };
};

export var isOpened = function isOpened(state) {
  return function (id) {
    return getCard(state)(id);
  };
};