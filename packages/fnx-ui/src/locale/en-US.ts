/* eslint-disable no-template-curly-in-string */
import { Locale } from './interface';

const typeTemplate = '${label} is not a valid ${type}';

const locale: Locale = {
	locale: 'en-US',
	'pull-refresh': {
		loading: 'Loading...',
		loosing: 'Loose to refresh...',
		pulling: 'Pull to refresh...',
	},
	list: {
		loading: 'Loading...',
	},
	picker: {
		confirm: 'Confirm',
		cancel: 'Cancel',
	},
	pagination: {
		prev: 'Previous',
		next: 'Next',
	},
	uploader: {
		upload: 'Upload',
	},
	cascader: {
		select: 'Select',
	},
	calendar: {
		confirm: 'Confirm',
		end: 'End',
		start: 'Start',
		title: 'Calendar',
		startEnd: 'Start/End',
		weekdays: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
		monthTitle: '${year}/${month}',
		rangePrompt: 'Choose no more than ${maxRange} days',
	},
	form: {
		validate: {
			default: 'Field validation error for ${label}',
			required: 'Please enter ${label}',
			enum: '${label} must be one of [${enum}]',
			whitespace: '${label} cannot be a blank character',
			date: {
				format: '${label} date format is invalid',
				parse: '${label} cannot be converted to a date',
				invalid: '${label} is an invalid date',
			},
			types: {
				string: typeTemplate,
				method: typeTemplate,
				array: typeTemplate,
				object: typeTemplate,
				number: typeTemplate,
				date: typeTemplate,
				boolean: typeTemplate,
				integer: typeTemplate,
				float: typeTemplate,
				regexp: typeTemplate,
				email: typeTemplate,
				url: typeTemplate,
				hex: typeTemplate,
			},
			string: {
				len: '${label} must be ${len} characters',
				min: '${label} must be at least ${min} characters',
				max: '${label} must be up to ${max} characters',
				range: '${label} must be between ${min}-${max} characters',
			},
			number: {
				len: '${label} must be equal to ${len}',
				min: '${label} must be minimum ${min}',
				max: '${label} must be maximum ${max}',
				range: '${label} must be between ${min}-${max}',
			},
			array: {
				len: 'Must be ${len} ${label}',
				min: 'At least ${min} ${label}',
				max: 'At most ${max} ${label}',
				range: 'The amount of ${label} must be between ${min}-${max}',
			},
			pattern: {
				mismatch: '${label} does not match the pattern ${pattern}',
			},
		},
	},
	dialog: {
		confirm: 'Confirm',
		cancel: 'Cancel',
	},
};

export default locale;
