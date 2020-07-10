import React from 'react';
import {SearchBar} from '../../components/search-bar/search-bar.component.jsx';
import FooterPage from '../../pages/footerpage/footerpage.component';

import './homepage.styles.scss';
import CompanyDirectory from "../../components/company-directory/company-directory.component";
import BusinessDirectory from '../../components/business-directory/business-directory.component';

import {ApolloClient, InMemoryCache} from 'apollo-boost';
import { createHttpLink } from "apollo-link-http";


/**
 * creating an instance of Appollo client , 
 * the apollo client connects to the backend graphql
 */
const customFetch = (uri, options) => {
    return fetch(uri, options).then(response => {
      if (response.status >= 500) {  // or handle 400 errors
        return Promise.reject(response.status);
      }
      return response;
    });
};

const client = new ApolloClient({
    link: createHttpLink({
        uri: 'http://localhost:9898/query',
        fetch: customFetch,
        headers: {
            'Content-Type': 'application/graphql',
          },
        onError: (e) => { console.log(e) }
      }),
      cache: new InMemoryCache()
});

const HomePage = () => (
    //This is the directory for blackspace
    <div className='homepage'> 
    {/* this section has a list of 4 categories of businesses */}
        {/* <div className='categories'>add popular categories here</div> */}
        <SearchBar/>
        <BusinessDirectory/>  
        {/* <CompanyDirectory /> */}
        {/* <div className='other options'> space for more product seelctions </div> */}
        <FooterPage/>
    </div>
);

export default HomePage;