const header = require('./header.11ty.cjs');
const footer = require('./footer.11ty.cjs');
const nav = require('./nav.11ty.cjs');
const relative = require('./relative-path.cjs');

module.exports = function (data) {
  const {title, page, content} = data;
  return `
<!doctype html>

<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${title}</title>
    <link rel="stylesheet" href="${relative(page.url, '/docs.css')}">
    <link rel="stylesheet" href="${relative(page.url, '/design.css')}">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600|Roboto+Mono">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Bitter:wght@100;400;700&display=swap" rel="stylesheet">
    <link
      href="https://fonts.googleapis.com/css2?family=Inter:wght@100;400;700&display=swap"
      rel="stylesheet"
    />
    <script src="/node_modules/@webcomponents/webcomponentsjs/webcomponents-loader.js"></script>
    <script type="module" src="${relative(
      page.url,
      '/index.bundled.js'
    )}"></script>
  </head>
  <body theme="blue-gradiant">
      ${header(data)}
      ${content}  
      ${footer()}
  </body>
</html>`;
};
