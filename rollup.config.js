import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import { terser } from 'rollup-plugin-terser';
import pkg from './package.json';

export default [
  {
    input: './index.js',
    output: {
      name: 'pacecal',
      file: pkg.browser,
      format: 'umd'
    },
    plugins: [resolve(), commonjs(), terser()]
  },
  {
    input: './index.js',
    output: [
      { file: pkg.main, format: 'cjs', plugins: [terser()] },
      { file: pkg.module, format: 'esm', plugins: [terser()] }
    ]
  }
];
