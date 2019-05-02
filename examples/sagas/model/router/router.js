import {
  put,
  select,
  call,
} from 'redux-saga/effects'
import {
  push,
  getTitle,
} from 'redux/router'

export function* goToHome() {
  yield put(push('HOME'))
}

export function* goToIcon() {
  yield put(push('ICON'))
}

export function* goToButton() {
  yield put(push('BUTTON'))
}

export function* goToInput() {
  yield put(push('INPUT'))
}

export function* goToGroup() {
  yield put(push('GROUP'))
}

export function* goToPopover() {
  yield put(push('POPOVER'))
}

export function* goToBottomSheets() {
  yield put(push('BOTTOMSHEETS'))
}

export function* goToTabs() {
  yield put(push('TABS'))
}

export function* load() {
  const title = yield select(getTitle)

  if (title === 'HOME') yield call(goToHome)
}

export function* goToToast() {
  yield put(push('TOAST'))
}
