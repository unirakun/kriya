import resolve from 'rollup-plugin-node-resolve'
import uglify from 'rollup-plugin-uglify'
import babel from 'rollup-plugin-babel'

export default {
  entry: 'src/components.js',
  dest: 'rollup-lib/components.js',
  moduleName: 'trampss-redux-saga-tester',
  format: 'umd',
  plugins: [
    resolve({
      extensions: ['.js', '.jsx'],
    }),
    babel({
      exclude: 'node_modules/**',
    }),
    uglify(),
  ],
}
