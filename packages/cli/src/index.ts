/* eslint-disable @typescript-eslint/no-var-requires */
const pkg = require('../package.json');
const _eslint = require('./eslint');
const _stylelint = require('./stylelint');

export const cliVersion: string = pkg.version;
export const eslint = _eslint;
export const stylelint = _stylelint;
