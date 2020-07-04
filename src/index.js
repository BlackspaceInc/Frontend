import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import ApolloClient from 'apollo-client';
import { gql } from "apollo-boost";
import { InMemoryCache } from "apollo-cache-inmemory";
import { createHttpLink } from 'apollo-link-http';
import { ApolloProvider } from '@apollo/react-hooks';
import './index.css';
import App from './App';

const cache = new InMemoryCache();

const httpLink = new createHttpLink(
    {
        uri: "http://localhost:9898/query"
    }
)

// connection uri for the backend graphql api
const client = new ApolloClient({
    link: httpLink,
    cache: cache,
    onError: (e) => { console.log(e) },
});

ReactDOM.render(
    <ApolloProvider client={client}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </ApolloProvider>,
  document.getElementById('root')
);
