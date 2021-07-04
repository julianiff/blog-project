const syntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight');
const CleanCSS = require('clean-css');

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(syntaxHighlight);
  eleventyConfig.addPassthroughCopy('src/docs.css');
  eleventyConfig.addPassthroughCopy('src/.nojekyll');
  eleventyConfig.addPassthroughCopy('node_modules/es-module-shims');
  eleventyConfig.addPassthroughCopy(
    'node_modules/@webcomponents/webcomponentsjs'
  );
  eleventyConfig.addPassthroughCopy('node_modules/lit/polyfill-support.js');
  eleventyConfig.addFilter('cssmin', function (code) {
    return new CleanCSS({}).minify(code).styles;
  });
  return {
    dir: {
      input: 'src',
      output: 'public',
    },
    templateExtensionAliases: {
      '11ty.cjs': '11ty.js',
      '11tydata.cjs': '11tydata.js',
    },
  };
};
