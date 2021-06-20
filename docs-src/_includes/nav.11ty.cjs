const relative = require('./relative-path.cjs');

module.exports = function ({page}) {
  return `
<nav>
  <iff-link href="${relative(page.url, '/')}">
    <iff-text styling="paragraph-slim">Julian Iff</iff-text>
  </iff-link>
  <iff-link href="${relative(page.url, '/project/')}" active="${
    page.url === '/project/'
  }">
    <iff-text styling="paragraph-slim">Projects</iff-text>
  </iff-link>
</nav>`;
};
