/* eslint-disable
  import/no-extraneous-dependencies,
  react/jsx-filename-extension,
  react/no-children-prop,
  react/prop-types,
*/
/* eslint-env jest */

import React from 'react'
import renderer from 'react-test-renderer'
import { mount } from 'enzyme'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import snap from 'snap'
import { close, CLOSE_POPOVER } from './redux'
import BottomSheets from './bottomSheets'
import BottomSheetsContainer from './bottomSheets.container'

const Child = ({ print, onClose, contents, ...props }) => <div {...props}>{`custom_component_child${JSON.stringify({ print, onClose, contents })}`}</div>
const Child2 = ({ print, onClose, contents, ...props }) => <div {...props}>{`custom_2${JSON.stringify({ print, onClose, contents })}`}</div>

const snapshot = props => snap(BottomSheets)({ children: <Child />, ...props })

describe('common/BottomSheets', () => {
  describe('graphical (JSX)', () => {
    it('should add custom className', snapshot({ className: 'custom' }))
    it('should add custom style', snapshot({ style: { backgroundColor: 'red' } }))
    it('should add children', snapshot({ children: <Child2 /> }))
    it('should have a default behaviour', snapshot({}))
    it('should be print when asked for and passed it to child', snapshot({ print: true }))
    it('should pass onClose function to child', snapshot({ onClose: () => {} }))
    it('should pass contents to child', snapshot({ contents: { description: 'description' } }))
    it('should call onClose when clicked', () => {
      const onClick = jest.fn()
      const wrapper = mount(
        <BottomSheets children={<Child />} onClose={onClick} />,
      )

      wrapper.find('div').first().simulate('click')
      expect(onClick.mock.calls.length).toBe(1)
    })
  })

  describe('container', () => {
    const snapContainer = (state, props) => {
      const store = createStore(() => ({ ui: { bottomSheets: state } }))
      const component = renderer.create(
        <Provider store={store}>
          <BottomSheetsContainer {...props}>
            <Child />
          </BottomSheetsContainer>
        </Provider>,
      )

      const tree = component.toJSON()
      expect(tree).toMatchSnapshot()
    }

    it('should pass print=false when the BottomSheets is not listed in redux', () => snapContainer({ pop1: { print: true } }, { code: 'pop2' }))
    it('should pass print=true when the BottomSheets IS listed in redux', () => snapContainer({ pop1: { print: true } }, { code: 'pop1' }))
    it('should pass onClose callback when closable', () => snapContainer({}, { code: 'pop1', closable: true }))
    it('should pass contents', () => snapContainer({}, { code: 'pop1', contents: { descriptions: 'descriptions' } }))
    it(`should call ${CLOSE_POPOVER} when clicked`, () => {
      const dispatch = jest.fn()
      const store = createStore(() => ({ ui: { bottomSheets: { code: 'pop1' } } }))
      store.dispatch = dispatch

      const EmptyChild = () => <div />
      const wrapper = mount(
        <Provider store={store}>
          <BottomSheetsContainer code="pop1" closable>
            <EmptyChild />
          </BottomSheetsContainer>
        </Provider>,
      )

      wrapper.find('div').first().simulate('click')

      expect(dispatch.mock.calls.length).toBe(1)
      expect(dispatch.mock.calls[0]).toEqual([close('pop1')])
    })
  })
})

/* eslint-enable
  import/no-extraneous-dependencies,
  react/jsx-filename-extension,
  react/no-children-prop,
  react/prop-types,
*/
