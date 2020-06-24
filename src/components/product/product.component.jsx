import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react';
import Logo from '../../images/test/dark_flowers.jpg';

const Product = () => (
  <div className='product'>
    <Card href='#card-example-link-card'>
        <Image src={Logo} wrapped ui={false} />
        <Card.Content>
          <Card.Header>Product 1</Card.Header>
          <Card.Meta>
            <span className='date'>Company name</span>
          </Card.Meta>
          <Card.Description>
            details on product
          </Card.Description>
        </Card.Content>
      </Card>
  </div>
)

export default Product;
