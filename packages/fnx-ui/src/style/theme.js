function format(styles) {
	const output = {};

	for (const key in styles) {
		output[`--fnx-${key}`] = styles[key];
	}

	return output;
}

function v(v) {
	return `var(--fnx-${v})`;
}

function base(theme) {
	const paddingBase = 4;

	return {
		// Color Plates
		...(theme === 'light'
			? {
					'gray-50': 'rgb(255, 255, 255)',
					'gray-75': 'rgb(250, 250, 250)',
					'gray-100': 'rgb(245, 245, 245)',
					'gray-200': 'rgb(234, 234, 234)',
					'gray-300': 'rgb(225, 225, 225)',
					'gray-400': 'rgb(202, 202, 202)',
					'gray-500': 'rgb(179, 179, 179)',
					'gray-600': 'rgb(142, 142, 142)',
					'gray-700': 'rgb(110, 110, 110)',
					'gray-800': 'rgb(75, 75, 75)',
					'gray-900': 'rgb(44, 44, 44)',
			  }
			: {
					'gray-50': 'rgb(37, 37, 37)',
					'gray-75': 'rgb(47, 47, 47)',
					'gray-100': 'rgb(50, 50, 50)',
					'gray-200': 'rgb(62, 62, 62)',
					'gray-300': 'rgb(74, 74, 74)',
					'gray-400': 'rgb(90, 90, 90)',
					'gray-500': 'rgb(110, 110, 110)',
					'gray-600': 'rgb(144, 144, 144)',
					'gray-700': 'rgb(185, 185, 185)',
					'gray-800': 'rgb(227, 227, 227)',
					'gray-900': 'rgb(255, 255, 255)',
			  }),

		'black-color': '#000000',
		'white-color': '#ffffff',
		'natural-color': v(theme === 'light' ? 'white-color' : 'black-color'),
		'natural-inverse-color': v(
			theme === 'light' ? 'black-color' : 'white-color',
		),

		'primary-color': 'rgb(55, 142, 240)',
		'danger-color': 'rgb(236, 91, 98)',
		'warning-color': 'rgb(242, 148, 35)',
		'success-color': 'rgb(51, 171, 132)',

		'page-color': v('gray-50'),
		'link-color': v('primary-color'),

		// Opacity
		'active-opacity': 0.7,
		'disabled-opacity': 0.5,

		// Padding
		'padding-base': `${paddingBase}px`,
		'padding-xs': `${paddingBase * 2}px`,
		'padding-sm': `${paddingBase * 3}px`,
		'padding-md': `${paddingBase * 4}px`,
		'padding-lg': `${paddingBase * 6}px`,
		'padding-xl': `${paddingBase * 8}px`,

		// Font
		'font-size-xs': '10px',
		'font-size-sm': '12px',
		'font-size-md': '14px',
		'font-size-lg': '16px',
		'font-weight-bold': '500',
		'line-height-xs': '14px',
		'line-height-sm': '18px',
		'line-height-md': '20px',
		'line-height-lg': '22px',
		'base-font-family':
			"-apple-system, BlinkMacSystemFont, 'Helvetica Neue', Helvetica, Segoe UI, Arial, Roboto, 'PingFang SC', 'miui', 'Hiragino Sans GB', 'Microsoft Yahei', sans-serif",
		'price-integer-font-family':
			'Avenir-Heavy, PingFang SC, Helvetica Neue, Arial, sans-serif',

		// Animation
		'animation-duration-base': '300ms',
		'animation-duration-fast': '200ms',
		'animation-timing-function-enter': 'ease-out',
		'animation-timing-function-exit': 'ease-in',

		// Border
		'border-width-base': '1px',
		'border-radius-sm': '2px',
		'border-radius-md': '4px',
		'border-radius-lg': '8px',
		'border-radius-max': '999px',
		'border-style-base': 'solid',

		'box-shadow':
			theme === 'light'
				? 'rgba(144, 144, 144, 0.16)'
				: 'rgba(142, 142, 142, 0.16)',

		// Picker
		'picker-mask-background-from':
			theme === 'light'
				? 'rgba(250, 250, 250, 0.9)'
				: 'rgba(47, 47, 47, 0.9)',
		'picker-mask-background-to':
			theme === 'light'
				? 'rgba(250, 250, 250, 0.4)'
				: 'rgba(47, 47, 47, 0.4)',
	};
}

module.exports = function theme(theme = 'light') {
	return {
		...format(base(theme)),
	};
};
