import React from 'react';
import axios from 'axios';

import './business-directory.styles.scss';
import Business from '../business/business.component';
import SearchBar from '../../components/search-bar/search-bar.component.jsx';
import {connect} from 'react-redux';

export default class BusinessDirectory extends React.Component{
  state = {
      error: null,
      isLoaded: false,
      items: [],
      searchField: ''
    }

  componentDidMount() {

    // This is the GraphQL query
    const query = `
    query {
      getPaginatedCompanies(limit: 6)
              {
          name
          address
          links
          number
          id
        }
    }
    `;
  
    // These variables are optional, leave empty for now
    const variables = {};
  
    // We call the method here to execute our async function
    this.getAnime(query, variables)
  
  }
  
  getAnime = async (query, variables) => {
    try {
      const response = await axios.post('http://localhost:9898/query', {
        query,
        variables
      });
  
      // Log the response so we can look at it in the console
      console.log(response.data)
  
      // Set the data to the state
      this.setState(() => ({
        isLoaded: true,
        items: response.data.data.getPaginatedCompanies
      }));
  
    } catch (error) {
      // If there's an error, set the error to the state
      this.setState(() => ({ error }))
    }
  }

  handleChange = (e) =>{
    this.setState({searchField:e.target.value})
  }

  render() {

    const { error, isLoaded, items, searchField} = this.state;
    const filteredCompanies = items.filter(company => company.name.toLowerCase().includes(searchField.toLowerCase()))
                                  

    if (error) {
      return <div>{error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
  
      return (
        <div className='company-directory'>
          <div className='search-container'>
            <SearchBar
              handleChange={this.handleChange}
            />
          </div>
          <div className='business-list'>
            {
              filteredCompanies.map(item => (<Business key={item.id} item={item}/>)
            )}
          </div>
        </div>
      
      );
  
    }
  }
}
