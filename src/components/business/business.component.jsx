import React, { Component } from 'react';

class Business extends Component {
  render() {
    return (
      <div>
        <div>
          {this.props.busines.name} ({this.props.busines.address})
        </div>
      </div>
    )
  }
};

export default Business;