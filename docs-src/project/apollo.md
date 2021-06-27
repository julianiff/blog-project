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
<iff-title level=3>
Queries
</iff-title>
<iff-text>
With GraphQL you can query for specific fields on objects. A simple query looks like that. Where hero is the entity and name is a property. </iff-text>

```js
{
  hero {
    name
  }
}
```

<iff-text>
GraphQL can also traverse related objects and return their fields by simply nesting the object. GraphQL is used in apollo by wrapping the queries into a gql function to parse them into the query Document. Again an advantage of using apollo is that the apollo hook returns a loading, error and data state of the request. With arguments the graphql query can be enriched to search for arguments, which can also be nested inside of the GraphQL object.
</iff-text>
<iff-title level=3>Caching variations</iff-title>
<iff-text>
Apollo supports two strategies for caching. One is polling that sets a recurring intervall to fetch data. The other is refetching that refresehes query result in response to a user action as opposed to a fixed intervall. Polling is a option that is passed to the hook function. And refetch is a function that is returned by the apollo hook. To have more fine grained information about the network Status. The option notifyOnNetworkStatusChange offers to see the network status of refetches and adds notifications. 
</iff-text>

<iff-title level=3>Reacting to event</iff-title>
<iff-text>When using useQuery hook in a component it directly executes, when the component is mounted. If you want to delay the execution of a query useLazyQuery can be used. useLazyQuery returns a function that then takes an object that gets executed. This is espetially useful when user input is needed to trigger an event. Another useful result Object is the fetchMore function that helps fetch the next set of results for a paginated list field. </iff-text>

<iff-title level=3>Local State</iff-title>
<iff-text>In its core, apollo client is a state management library that uses GraphQL to interact with a remote server. But the remote server is not entirely needed. To achieve that an in Memory cache can be defined and a field directive @client is added to the query object. When adding a field @client field directive, apollo omits to query the backend and just queries locally. </iff-text>