const syntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight');
const htmlmin = require('html-minifier');

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(syntaxHighlight);
  eleventyConfig.addPassthroughCopy('src/**/*.svg');
  eleventyConfig.addPassthroughCopy('src/**/*.png');
  eleventyConfig.addPassthroughCopy('src/styling.css');
  eleventyConfig.addPassthroughCopy('src/.nojekyll');
  eleventyConfig.addPassthroughCopy('node_modules/es-module-shims');
  eleventyConfig.addPassthroughCopy(
    'node_modules/@webcomponents/webcomponentsjs'
  );
  eleventyConfig.addPassthroughCopy('node_modules/lit/polyfill-support.js');

  eleventyConfig.addTransform('htmlmin', function (content, outputPath) {
    // Eleventy 1.0+: use this.inputPath and this.outputPath instead
    if (outputPath && outputPath.endsWith('.html')) {
      let minified = htmlmin.minify(content, {
        useShortDoctype: true,
        removeComments: true,
        collapseWhitespace: true,
      });
      return minified;
    }

    return content;
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
