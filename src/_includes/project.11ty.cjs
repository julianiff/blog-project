const page = require('./page.11ty.cjs');
const relative = require('./relative-path.cjs');

/**
 * This template extends the page template and adds an examples list.
 */
module.exports = function (data) {
  return page({
    ...data,
    content: renderExample(data),
  });
};

const renderExample = ({name, content, collections, page, pageTitle, lead}) => {
  return `
    
    <iff-grid-layout layout="1-1-1">
        <iff-grid-item orientation="end" background="positive" spacer="component" height="full">
        <iff-link href="${relative(page.url, '/project')}">
          <iff-title level=2 textAlign="right" surplus="giganto">Posts</iff-title>
        </iff-link>
          <iff-grid-layout layout="1">
          ${collections.project
            .filter((item) => !!item.data.navigation)
            .map(
              (item) => `
            <iff-grid-item orientation="end">
              <iff-link href="${relative(page.url, item.url)}">
                <iff-title level="4" textAlign="right">
                  ${item.data.navigation}
                </iff-title>
              </iff-link>
            </iff-grid-item>
            
          `
            )
            .join('')}
          </iff-grid-layout>
        </iff-grid-item>
        <iff-grid-item orientation="start" spacer="component">
          <article>
              <iff-title level="2">${pageTitle}</iff-title>
              <iff-title level="4">${lead}</iff-title>
            ${content}
          </article>
        </iff-grid-item >
      </iff-grid-layout>
    
  `;
};
