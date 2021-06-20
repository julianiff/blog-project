const nav = require('./nav.11ty.cjs');

module.exports = function (data) {
  return `
<header>
  ${nav(data)}
</header>
`;
};
