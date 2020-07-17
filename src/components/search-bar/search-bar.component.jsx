import React from 'react';
import {connect} from 'react-redux';

import './search-bar.styles.scss';



//figure out redux, do search functions here
class SearchBar extends React.Component{

    handleChange  = this.props.handleChange;
    render(){
        return(

            <div>
                <form className='search-form' >
                    <div className='business-search'>
                        <div className='search-element'>
                            <label className='search-label'> Search Company Here</label>
                            <input 
                                className='search-input'
                                type='text'
                                autocomplete='on'
                                onChange={this.handleChange}
                                name= 'searchText'
                              
                            />
                        </div>
                        {/* <a type="submit" class="search-button">Search</a> */}
                    </div>
                </form>
            </div>
        )
    }
}
 

export default SearchBar;
