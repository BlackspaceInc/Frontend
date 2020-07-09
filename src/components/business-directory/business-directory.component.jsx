import React from 'react';
import { Query, useQuery, useLazyQuery} from "react-apollo";
import gql from "graphql-tag";

import './business-directory.styles.scss';
import Business from '../business/business.component';



const BusinessDirectory = () => (
    <Query query={gql`
        {
            getPaginatedCompanies(limit: 15){
                name
                address
                links
                number
                id
            }
        }
    `}>
        {({loading, error, data}) =>{
            if(loading) return <p>loading...</p>;
            if(error) return <p>error : {error.message}</p> 
            
            return data.getPaginatedCompanies.map((currentBusiness) =>(
               <div className='businessdirectory'>
                    <Business key={currentBusiness.id} business = {currentBusiness}/>
               </div>
                
            ));
        }}
    </Query>

);

export default BusinessDirectory;
