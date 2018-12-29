const withTypescript = require('@zeit/next-typescript');
const withFonts = require('next-fonts');
const withCss = require('@zeit/next-css');
const withPlugins = require('next-compose-plugins');

module.exports = withPlugins([withFonts, withCss, withTypescript]);
