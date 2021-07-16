const header = require('./header.11ty.cjs');
const footer = require('./footer.11ty.cjs');
const relative = require('./relative-path.cjs');

module.exports = function (data) {
  const {title, page, content} = data;
  return `
<!doctype html>

<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script async src="/node_modules/es-module-shims/dist/es-module-shims.js"></script>
    <script async src="/node_modules/@webcomponents/webcomponentsjs/webcomponents-loader.js"></script>
    <title>${title}</title>
    <meta name="description" content="Hey, My passion is to create new digital features and products that transform how users achieve their goals.">

    <link rel="stylesheet" href="${relative(page.url, '/styling.css')}">
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Bitter:wght@100;200;400;700&display=swap"
      rel="stylesheet"
    />
    <link
      href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;400;700&display=swap"
      rel="stylesheet"
    />

    <link rel="stylesheet" href="https://unpkg.com/iff-design-system@1.1.1/lib/index.css">
    <script type="importmap">
      {
        "imports": {
          "/index.js": "https://unpkg.com/iff-design-system@1.1.1/lib/index.js?module"
        }
      }
    </script>
    <script type="module">
      import '/index.js';
    </script>
  </head>
  <body theme="blue-gradiant">
    ${header(data)}
    ${content}
    ${footer()}
  </body>
</html>`;
};
