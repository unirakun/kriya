import { takeLatest, takeEvery, put } from 'redux-saga/effects'
import * as router from './model/router'

export default function* () {
  // Router
  yield takeLatest('BTN_CLICKED_MENU-ITEM-button', router.goToButton)
  yield takeLatest('BTN_CLICKED_MENU-ITEM-input', router.goToInput)
  yield takeLatest('BTN_CLICKED_MENU-ITEM-group', router.goToGroup)
  yield takeLatest('BTN_CLICKED_MENU-ITEM-popover', router.goToPopover)
  yield takeLatest('BTN_CLICKED_MENU-ITEM-tabs', router.goToTabs)
  yield takeLatest('MENU_HEADER_CLICKED', router.goToHome)
}
