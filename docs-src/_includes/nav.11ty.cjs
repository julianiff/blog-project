const relative = require('./relative-path.cjs');

module.exports = function ({page}) {
  return `
<nav>
  <iff-link href="${relative(page.url, '/')}">
    <iff-text styling="paragraph-slim">Home</iff-text>
  </iff-link>
  <iff-link href="${relative(page.url, '/examples/')}">
    <iff-text styling="paragraph-slim">Examples</iff-text>
  </iff-link>
  <iff-link href="${relative(page.url, '/api/')}">
    <iff-text styling="paragraph-slim">API</iff-text>
  </iff-link>
  <iff-link href="${relative(page.url, '/install/')}">
    <iff-text styling="paragraph-slim">Install</iff-text>
  </iff-link>
  <iff-link href="${relative(page.url, '/')}">
    <iff-text styling="paragraph-slim">Home</iff-text>
  </iff-link>
</nav>`;
};
