import { put, select, call } from 'redux-saga/effects'
import { push, getTitle } from 'redux/router'

export function* goToHome() {
  yield put(push('/'))
}

export function* goToButton() {
  yield put(push('/button'))
}

export function* goToInput() {
  yield put(push('/input'))
}

export function* goToGroup() {
  yield put(push('/group'))
}

export function* goToPopover() {
  yield put(push('/popover'))
}

export function* goToTabs() {
  yield put(push('/tabs'))
}

export function* load() {
  const title = yield select(getTitle)

  if (title === 'HOME') yield call(goToHome)
}
