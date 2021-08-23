const relative = require('./relative-path.cjs');

module.exports = function ({page}) {
  return `
  <iff-head-navigation>
    <iff-link slot="start" href="${relative(page.url, '/')}">
      <iff-text styling="paragraph-slim">Julian Iff</iff-text>
    </iff-link>
    <iff-link slot="end" href="${relative(page.url, '/about')}" active="${
    page.url === '/'
  }">
      <iff-text styling="paragraph-slim">About</iff-text>
    </iff-link>
    <iff-link slot="end" href="${relative(page.url, '/project/')}" active="${
    page.url === '/project/'
  }">
      <iff-text styling="paragraph-slim">Posts</iff-text>
    </iff-link>
  </iff-head-navigation>
  `;
};
