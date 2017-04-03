/* eslint-disable */
global.Intl = require('intl')

// Fix found on https://github.com/andyearnshaw/Intl.js/issues/256#ref-commit-61c721a
global.Intl.__disableRegExpRestore()

/* eslint-enable */
