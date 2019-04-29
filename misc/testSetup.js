
import enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

/* eslint-disable */
global.Intl = require('intl')

// Fix found on https://github.com/andyearnshaw/Intl.js/issues/256#ref-commit-61c721a
global.Intl.__disableRegExpRestore()

/* eslint-enable */

enzyme.configure({ adapter: new Adapter() })

// Make console.error a real failure
console.error = (message) => { // eslint-disable-line no-console
  throw new Error(message)
}
