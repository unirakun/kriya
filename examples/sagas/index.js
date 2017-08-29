import { takeLatest } from 'redux-saga/effects'
import * as router from './model/router'

const action = to => `BTN_CLICKED_MENU-ITEM-${to}`

export default function* () {
  // Router
  yield takeLatest(action('button'), router.goToButton)
  yield takeLatest(action('input'), router.goToInput)
  yield takeLatest(action('icon'), router.goToIcon)
  yield takeLatest(action('group'), router.goToGroup)
  yield takeLatest(action('popover'), router.goToPopover)
  yield takeLatest(action('bottomSheets'), router.goToBottomSheets)
  yield takeLatest(action('tabs'), router.goToTabs)
  yield takeLatest('MENU_HEADER_CLICKED', router.goToHome)
}
