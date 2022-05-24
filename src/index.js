import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { ApolloClient, createHttpLink, InMemoryCache, ApolloProvider } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

const httpLink = createHttpLink({
	uri: process.env.URI,
  });
console.log(httpLink)
const authLink = setContext((_, { headers }) => {
	// get the authentication token from local storage if it exists
	console.log('INDEX:' + localStorage.getItem('token'))
	const token = localStorage.getItem('token');
	// return the headers to the context so httpLink can read them
	return {
	  headers: {
		...headers,
		authorization: token ? `Bearer ${token}` : "",
	  }
	}
  });
  

const client = new ApolloClient({
	uri: 'http://localhost:3000/api/graphql',
	// links: authLink.concat(httpLink),
	links: authLink.concat(httpLink),
	cache: new InMemoryCache()
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<BrowserRouter>
		<ApolloProvider client={client}>
			<App />
		</ApolloProvider>
	</BrowserRouter>
);
