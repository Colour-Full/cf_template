module.exports = {
	plugins: {
		'postcss-import': {},
		'postcss-cssnext': {
			browsers: ['since 2010'],
		},
		'postcss-bem-linter': {preset: 'suit'},
		'postcss-pxtorem': {
			rootValue: 16,
			unitPrecision: 5,
			propList: ['*'],
			selectorBlackList: [],
			replace: true,
			mediaQuery: true,
			minPixelValue: 0
		}
	}
}