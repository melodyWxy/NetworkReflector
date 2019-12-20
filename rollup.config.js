
import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import replace from "rollup-plugin-replace";


const production = !process.env.ROLLUP_WATCH;
const NODE_ENV = process.env.NODE_ENV;

export default {
  input: 'src/main.js',
  output: {
    file: './dist/index.js',
    format: 'cjs',
  },
   "process.env": {
      NODE_ENV: JSON.stringify("production")
   },
  plugins: [
    replace({
      "process.env.NODE_ENV": JSON.stringify(NODE_ENV)
    }),
    resolve(),
    commonjs({
      include: ['node_modules/**'],
      exclude: ['node_modules/process-es6/**'],
      namedExports: {
        'node_modules/react/index.js': [
          'Children',
          'Component',
          'PropTypes',
          'createElement',
        ],
        'node_modules/react-dom/index.js': ['render'],
      },
    }), 
    babel({
      exclude: 'node_modules/**' // 只编译我们的源代码
    }),
  ],
};