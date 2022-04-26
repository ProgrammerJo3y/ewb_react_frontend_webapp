import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import {ApolloClient, HttpLink, InMemoryCache, ApolloProvider} from "@apollo/client"

const client = new ApolloClient({
  link: new HttpLink({
    uri: "https://n-api-sigma.vercel.app/api/graphql"
  }),
  cache: new InMemoryCache()
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </BrowserRouter>
);