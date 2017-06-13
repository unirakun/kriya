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
import { closePopover, CLOSE_POPOVER } from './redux'
import Popover from './popover'
import PopoverContainer from './popover.container'

const Child = ({ print, onClose, contents, ...props }) => <div {...props}>{`custom_component_child${JSON.stringify({ print, onClose, contents })}`}</div>
const Child2 = ({ print, onClose, contents, ...props }) => <div {...props}>{`custom_2${JSON.stringify({ print, onClose, contents })}`}</div>

const snapshot = props => snap(Popover)({ children: <Child />, ...props })

describe('common/Popover', () => {
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
        <Popover children={<Child />} onClose={onClick} />,
      )

      wrapper.find('div').first().simulate('click')
      expect(onClick.mock.calls.length).toBe(1)
    })
  })

  describe('container', () => {
    const snapContainer = (state, props) => {
      const store = createStore(() => ({ ui: { popover: state } }))
      const component = renderer.create(
        <Provider store={store}>
          <PopoverContainer {...props}>
            <Child />
          </PopoverContainer>
        </Provider>,
      )

      const tree = component.toJSON()
      expect(tree).toMatchSnapshot()
    }

    it('should pass print=false when the popover is not listed in redux', () => snapContainer({ pop1: true }, { code: 'pop2' }))
    it('should pass print=true when the popover IS listed in redux', () => snapContainer({ pop1: true }, { code: 'pop1' }))
    it('should pass onClose callback when closable', () => snapContainer({}, { code: 'pop1', closable: true }))
    it('should pass contents', () => snapContainer({}, { code: 'pop1', contents: { descriptions: 'descriptions' } }))
    it(`should call ${CLOSE_POPOVER} when clicked`, () => {
      const dispatch = jest.fn()
      const store = createStore(() => ({ ui: { popover: { code: 'pop1' } } }))
      store.dispatch = dispatch

      const EmptyChild = () => <div />
      const wrapper = mount(
        <Provider store={store}>
          <PopoverContainer code="pop1" closable>
            <EmptyChild />
          </PopoverContainer>
        </Provider>,
      )

      wrapper.find('div').first().simulate('click')

      expect(dispatch.mock.calls.length).toBe(1)
      expect(dispatch.mock.calls[0]).toEqual([closePopover('pop1')])
    })
  })
})

/* eslint-enable
  import/no-extraneous-dependencies,
  react/jsx-filename-extension,
  react/no-children-prop,
  react/prop-types,
*/
