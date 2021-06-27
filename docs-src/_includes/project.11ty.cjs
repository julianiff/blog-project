const blog = require('./blog.cjs');
const relative = require('./relative-path.cjs');

/**
 * This template extends the page template and adds an examples list.
 */
module.exports = function (data) {
  return blog({
    ...data,
    content: renderExample(data),
  });
};

const renderExample = ({name, content, collections, page}) => {
  return `
    <iff-grid-layout layout="1-1-1">
        <iff-grid-item orientation="end" background="positive" spacer="component" height="full">
          <iff-title level=2 textAlign="right" surplus="giganto">${name}</iff-title>

          <iff-grid-layout layout="1">
          ${collections.project
            .map(
              (item) => `
            <iff-grid-item orientation="end">
              <iff-link href="${relative(page.url, item.url)}">
                <iff-title level="4" textAlign="right">
                  ${item.data.description}
                </iff-title>
              </iff-link>
            </iff-grid-item>
            
          `
            )
            .join('')}
          </iff-grid-layout>
        </iff-grid-item>
        <iff-grid-item orientation="start" spacer="component">
            ${content}
        </iff-grid-item >
      </iff-grid-layout>
  `;
};
