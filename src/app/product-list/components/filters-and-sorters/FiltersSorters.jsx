import React from 'react';
import './filters-sorters.scss';
import { Input, Segmented, Space } from 'antd';

const { Search } = Input;

export const FiltersSorters = (props) => {

	const { setNameFilter, setDescriptionFilter, priceSorter, setPriceSorter, defaultPriceSorter } = props;

	const onNameSearch = (userValue) => {
		setNameFilter(userValue);
	}

	const onDescriptionSearch = (userValue) => {
		setDescriptionFilter(userValue);
	}

	return (
		<>
			<div className="filters-container">

				<Search
					className="search-input"
					placeholder="Name Search"
					onChange={(e) => onNameSearch(e.target.value)}
					allowClear
				/>

				<Search
					className="search-input"
					placeholder="Description Search"
					onChange={(e) => onDescriptionSearch(e.target.value)}
					allowClear
				/>
			</div>

			<div className="sorters-container">
				<Space>
					<div>
						Sort products by price:
					</div>

					<Segmented
						options={['None', 'Ascending', 'Descending']}
						defaultValue={defaultPriceSorter}
						value={priceSorter}
						onChange={setPriceSorter}
					/>
				</Space>
			</div>
		</>

	);
};