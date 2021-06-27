const nav = require('./nav.11ty.cjs');

module.exports = function (data) {
  return `
<iff-header position="0">
  ${nav(data)}
</iff-header>
`;
};
