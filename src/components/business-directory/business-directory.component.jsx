import React from 'react';
import { Query } from "react-apollo";
import gql from "graphql-tag";

import './business-directory.styles.scss';
import Business from '../business/business.component';

const   GET_ALL_COMPANIES = gql `
    {
        getCompanies {
            name
            address
            links
            number
        }
    }
`;

class BusinessDirectory extends React.Component{
    render(){
        return (
                <Query query={GET_ALL_COMPANIES}>
                {({ loading, error, data }) => {
                if (loading) return <div>Fetching</div>
                if (error) return <div>Error</div>
            
                const companiesToRender = data.getPaginatedCompanies
            
                return (
                    <div>
                        {companiesToRender.map(business => <Business key={business.id} business={business} />)}
                    </div>
                )
                }}
            </Query>
          )
    }
}

export default BusinessDirectory;
