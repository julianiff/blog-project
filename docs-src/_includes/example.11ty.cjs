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

const renderExample = ({name, content, collections, page}) => {
  return `
    <iff-title level=1>Example: ${name}</iff-title>
    <section class="examples">
      <nav class="collection">
        <ul>
          ${
            collections.example === undefined
              ? ''
              : collections.example
                  .map(
                    (post) => `
                  <li class=${post.url === page.url ? 'selected' : ''}>
                    <iff-link href="${relative(
                      page.url,
                      post.url
                    )}"><iff-text styling="label">${post.data.description.replace(
                      '<',
                      '&lt;'
                    )}</iff-text></iff-link>
                  </li>
                `
                  )
                  .join('')
          }
        </ul>
      </nav>
      <div>
        ${content}
      </div>
    </section>
  `;
};
