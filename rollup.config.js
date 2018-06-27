import babel from 'rollup-plugin-babel';
import uglify from 'rollup-plugin-uglify-es';

export default {
  input: 'Maybe.js',
  output: [
    {
      file: 'index.js',
      format: 'cjs'
    },
    {
      file: 'index.es.js',
      format: 'es'
    },
    {
      file: 'index.min.js',
      format: 'iife',
      name: 'Maybe'
    }
  ],
  plugins: [
    babel({
      exclude: 'node_modules/**'
    }),
    uglify()
  ]
};