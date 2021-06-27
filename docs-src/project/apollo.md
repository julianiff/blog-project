---
layout: project.11ty.cjs
title: Project ⌲ Apollo
tags: 'project'
name: 'Projects'
description: 'apollo client'
---

<iff-title level="2">Apollo</hls-title>
<iff-title level="4">Apollo Cilent promises to simplify managing remote and local data in React applications. It brings with it an intelligent and declarative caching approach. Apollo takes care of the request cycle from the start to finish and provides loading and error states. In general the promise that Apollo brings is to have less code without compromising on features.</iff-text>
<iff-text>Out of the box, Apollo has a Zero-config cache that comes with an intelligent cache. The combination of local & remove data management allows to take advantage of GraphQL as the unified interface to all of the data. The plug-in architecture of Apollo Link allows for stack functionality and gives the flexibility to extend the client and customize the funcitonality.</iff-text>

<iff-title level=3>Setting up Apollo</iff-title>
<iff-text>Adding Apollo to a react project is as easy as adding the dependency and wrapping the application. To connect the Apollo Client ApolloProvider wraps the React app and places Apollo client on the context to access. This is also why it is suggested to put the Provider high in the app. For example directly in the top-level index.js</iff-text>

```js
function App() {
  return (
    <div>
      <h2>My first Apollo app 🚀</h2>
    </div>
  );
}
render(
  <ApolloProvider client="{client}">
    {' '}
    <App />{' '}
  </ApolloProvider>,
  document.getElementById('root')
);
```

<iff-title level=3>
Data Fetching
</iff-title>
<iff-text>Data can be queried by using the hook useQuery. The query return a result object containing</iff-text>

```js
const {loading, error, data} = useQuery(QUERY_QL);
```

<iff-text>This allows to have a loading indication and in case the query does not update it will show an error. When the loading finishes without an error. The data is shown and updates the view with the data.</iff-text>
