import React from 'react';
import Business from '../business/business.component';

export default class BusinessList extends React.Component {

    render() {
      return (
        <div className='business-list'>
            {
              this.props.businesses.map(item => (<Business key={item.id} item={item} />))
            }
        </div>
      );
    }
  }