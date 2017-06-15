import card from './card';
import * as actions from './card.actions';
import * as selectors from './card.selectors';

Object.assign(card, actions, selectors);

export default card;