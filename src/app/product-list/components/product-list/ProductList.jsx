import React from 'react';
import './product-list.scss';
import { ProductCard } from '../product-card/ProductCard';
import { Empty } from 'antd';

export const ProductList = (props) => {

	const { products } = props;

  const createProdctList = () => {

    const productList = [];

    if (Array.isArray(products)) {

      products.forEach(product => {
        const {id, name, price, description, image_url } = product;

        productList.push(
          <ProductCard
            key={id}
            name={name}
            price={price}
            description={description}
            image_url={image_url}
          />
        )
      })
    }

    return (productList.length > 0 ) ? productList : (
      <Empty                    
        image={Empty.PRESENTED_IMAGE_SIMPLE}
        description='No Products were Found'
      />
    );
  }

	return (
    <div className="product-list-container">
      {createProdctList()}
    </div>
	);
};