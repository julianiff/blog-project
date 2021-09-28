const header = require('./header.11ty.cjs');
const footer = require('./footer.11ty.cjs');
const relative = require('./relative-path.cjs');

module.exports = function (data) {
  const {title, page, content, navigationController} = data;
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
      rel="preload"
      href="https://fonts.googleapis.com/css2?family=Bitter:wght@100;200;400;700&display=swap"
      rel="stylesheet"
    />
    <link
      rel="preload"
      href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;400;700&display=swap"
      rel="stylesheet"
    />

<link rel="stylesheet" as="style" onload="this.onload=null;this.rel='stylesheet'" rel="preload" href="https://cdn.skypack.dev/-/iff-design-system@v1.8.3-g5H3NAfp5G41b0yFmtM8/dist=es2020,mode=raw/lib/index.css">
    <script type="importmap">
    {
    "imports": {
        "/index.js": "https://cdn.skypack.dev/pin/iff-design-system@v1.8.3-g5H3NAfp5G41b0yFmtM8/mode=imports,min/optimized/iff-design-system.js"
    }
    }
</script>
    <script type="module">
      import '/index.js';
    </script>
  </head>
  <body theme="blue-gradiant">
    ${navigationController === 'hide' ? '' : header(data)}
    ${content}
    ${navigationController === 'hide' ? '' : footer(navigationController)}
  </body>
</html>`;
};
