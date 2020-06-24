import React from 'react';
import './product-list.styles.scss';
import Product from '../../components/product/product.component';


export const ProductList = () => (
    //add logic to filter and show some cards 
    <div className='collection-preview'>
        <h1 className='title'>Category</h1> 
        <div className='preview'>
            <Product/>
        </div>
    </div>


);

