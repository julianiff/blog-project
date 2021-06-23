const nav = require('./nav.11ty.cjs');

module.exports = function (data) {
  return `
<iff-header>
  ${nav(data)}
</iff-header>
`;
};
