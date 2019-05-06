/* eslint-disable @typescript-eslint/no-var-requires, import/no-extraneous-dependencies */
const withTypescript = require('@zeit/next-typescript');
const withFonts = require('next-fonts');
const withCss = require('@zeit/next-css');
const withPlugins = require('next-compose-plugins');

module.exports = withPlugins([withFonts, withCss, withTypescript]);
