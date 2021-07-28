const nav = require('./nav.11ty.cjs');

module.exports = function (data) {
  console.log(data.page.url);
  return `
<iff-header position="0" animage>
  ${nav(data)}
</iff-header>
`;
};
