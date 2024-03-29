import React from 'react';
import './businessList.css';
import Business from '../business/business';

class BusinessList extends React.Component {
  render() {
    return (
      <div className="BusinessList">
        {
          this.props.businesses.map((business) => {
            return <Business key={business.id} business={business} />;
          })
        } 
      </div>
    )
  }
}

export default BusinessList;
