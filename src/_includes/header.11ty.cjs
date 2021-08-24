const nav = require('./nav.11ty.cjs');

module.exports = function (data) {
  return `
  <iff-grid-layout layout="1">
    <iff-header position="0">
      ${nav(data)}
    </iff-header>
  </iff-grid-layout>
`;
};
