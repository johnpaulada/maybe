import babel from 'rollup-plugin-babel';
import { uglify } from 'rollup-plugin-uglify';

export default {
  input: 'Maybe.js',
  output: {
    file: 'index.js',
    format: 'umd',
    name: 'Maybe'
  },
  plugins: [
    babel({
      exclude: 'node_modules/**'
    }),
    uglify()
  ]
};