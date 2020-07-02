import React from 'react';
import {SearchBar} from '../../components/search-bar/search-bar.component.jsx';
import FooterPage from '../../pages/footerpage/footerpage.component';

import './homepage.styles.scss';
import CompanyDirectory from "../../components/company-directory/company-directory.component";
import BusinessDirectory from '../../components/business-directory/business-directory.component';

import { ApolloProvider } from 'react-apollo'
import { ApolloClient } from 'apollo-client'
import { createHttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'

const httpLink = createHttpLink({
    uri: 'http://localhost:9898/gql' 
  })

const client = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache()
});

const HomePage = () => (
    //This is the directory for blackspace
    <div className='homepage'> 
    {/* this section has a list of 4 categories of businesses */}
        {/* <div className='categories'>add popular categories here</div> */}
        <SearchBar/>
        <ApolloProvider client={client}>
            <BusinessDirectory/>
        </ApolloProvider>
        {/* <CompanyDirectory /> */}
        {/* <div className='other options'> space for more product seelctions </div> */}
        <FooterPage/>
    </div>
);

export default HomePage;