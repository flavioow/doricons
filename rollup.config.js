import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import babel from '@rollup/plugin-babel'
import { terser } from 'rollup-plugin-terser'
import globImport from 'rollup-plugin-glob-import'

export default {
  input: 'src/index.js',
  output: {
    file: 'dist/doricons.js',
    format: 'umd',
    name: 'Doricons',
    globals: {
      react: 'React',
    },
  },
  external: ['react'],
  plugins: [
    resolve(),
    commonjs(),
    babel({ babelHelpers: 'bundled' }),
    terser(),
    globImport()
  ],
}