/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
module.exports = {
	theme: {
		fontFamily: {
			'akzidenz-light': ['Akzidenz-Grotesk-Light', 'sans-serif'],
			akzidenz: ['Akzidenz-Grotesk', 'sans-serif'],
			'akzidenz-medium': ['Akzidenz-Grotesk-Medium', 'sans-serif'],
			'akzidenz-bold': ['Akzidenz-Grotesk-Bold', 'sans-serif']
		},
		extend: {
			colors: {
				'gfinity-red': '#E94235',
				'gfinity-blue': '#293894',
				'dark-grey': '#1B1B1B',
				'light-grey': '#6B6B65',
				'gfinity-grey': '#CFD1C7',
				sand: '#DFE0D9'
			},
			maxWidth: {
				375: '375px'
			},
			width: {
				105: '105px'
			},
			height: {
				105: '105px'
			},
			fontSize: {
				16: '16px'
			},
			lineHeight: {
				19: '19px'
			}
		}
	},
	variants: {},
	plugins: []
}
