import serve from 'rollup-plugin-serve'
import livereload from 'rollup-plugin-livereload'
import babel from '@rollup/plugin-babel'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import replace from '@rollup/plugin-replace'
import eslint from '@rollup/plugin-eslint'
import typescript from '@rollup/plugin-typescript'
import postcss from 'rollup-plugin-postcss'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'


import pkg from './package.json'
const umd = pkg.main.replace(/\.cjs\.js$/, '.umd.js')

const development = () => ({
	input: 'src/index.ts',
	output: {
		file: 'dist/bundle.js',
		format: 'iife',
		sourcemap: true,
	},
	plugins: [
		resolve({
			include: ['src'],
			extensions: ['.js', '.jsx', '.ts', '.tsx'],
		}),
		typescript(),
		eslint({ include: ['src/**/*.js', 'src/**/*.ts'] }),
		postcss(),
		replace({
			preventAssignment: true,
			'process.env.NODE_ENV': JSON.stringify( 'development' )
		}),
		babel({
			presets: ['@babel/preset-react'],
			babelHelpers: 'bundled'
		}),
		commonjs(),
		serve({
			open: true,
			verbose: true,
			contentBase: ['', 'public'],
			host: 'localhost',
			port: 4000,
		}),
		livereload({ watch: 'dist' }),
	]
})

const production = [
	{
		input: 'src/main.ts',
		output: {
			globals: {
				'react': 'React'
			},
			file: umd,
			format: 'umd',
			name: 'ReactRating',
			sourcemap: true
		},
		plugins: [
			peerDepsExternal(),
			resolve(),
			typescript(),
			postcss(),
			commonjs(),
			babel({
				babelHelpers: 'bundled',
				exclude: 'node_modules/**'
			})
		],
		external: [
			'react'
		]
	},
	// Minified UMD build
	{
		input: 'src/main.ts',
		output: {
			globals: {
				'react': 'React'
			},
			file: umd.replace(/\.js/, '.min.js'),
			format: 'umd',
			name: 'ReactRating',
			sourcemap: true
		},
		plugins: [
			peerDepsExternal(),
			resolve(),
			typescript(),
			postcss(),
			commonjs(),
			babel({
				babelHelpers: 'bundled',
				exclude: 'node_modules/**'
			}),
		],
		external: [
			'react'
		]
	},
	// CommonJS (for Node) and ES module (for bundlers) build.
	{
		input: 'src/main.ts',
		output: [
			{
				file: pkg.main,
				format: 'cjs',
				exports: 'auto',
				sourcemap: true,
				globals: {
					'react': 'React'
				},
			},
			{
				file: pkg.module,
				format: 'es',
				sourcemap: true,
				globals: {
					'react': 'React'
				},
			}
		],
		plugins: [
			peerDepsExternal(),
			resolve(),
			typescript(),
			postcss(),
			commonjs(),
			babel({
				babelHelpers: 'bundled',
				exclude: 'node_modules/**'
			})
		],
		external: [
			'react'
		]
	}
]

const config = process.env.ENV === 'production' ? production : development()

export default config