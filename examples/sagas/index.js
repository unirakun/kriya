import { takeLatest } from 'redux-saga/effects'
import * as router from './model/router'

const btnClick = to => `BTN_CLICKED_MENU-ITEM-${to}`

export default function* () {
  // Router
  yield takeLatest(btnClick('button'), router.goToButton)
  yield takeLatest(btnClick('input'), router.goToInput)
  yield takeLatest(btnClick('icon'), router.goToIcon)
  yield takeLatest(btnClick('group'), router.goToGroup)
  yield takeLatest(btnClick('popover'), router.goToPopover)
  yield takeLatest(btnClick('bottomSheets'), router.goToBottomSheets)
  yield takeLatest(btnClick('tabs'), router.goToTabs)
  yield takeLatest('MENU_HEADER_CLICKED', router.goToHome)
}
