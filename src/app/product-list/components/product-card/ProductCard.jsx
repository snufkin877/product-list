import React from 'react';
import './product-card.scss';
import { ShoppingCartOutlined, ShopOutlined } from '@ant-design/icons';
import { Card } from 'antd';
const { Meta } = Card;

export const ProductCard = (props) => {

	const { name, price, description, image_url } = props;

	return (

		<Card
			className="product-card-item"
			cover={
				<img
					alt={name}
					src={image_url}
				/>
			}

			actions={[
				<ShopOutlined style={{ fontSize: '110%' }} key="store" />,
				<ShoppingCartOutlined style={{ fontSize: '120%' }} key="shopping-cart" />,
				<div className="product-price">{`$${price}`}</div>
			]}
		>

			<Meta
				className="product-description"
				title={name}
				description={description}
			/>
		</Card>
	);
};