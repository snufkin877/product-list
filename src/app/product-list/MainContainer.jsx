import React, { useState, useEffect } from 'react';
import './main-container.scss';
import data from '../../../data/MOCK_DATA.json';
import { FiltersSorters } from './components/filters-and-sorters/FiltersSorters';
import { ProductList } from './components/product-list/ProductList';

export const MainContainer = () => {

  const [displayedProducts, setDisplayedProducts] = useState(null);

  // filters and sorters
  const defaultPriceSorter = 'None';
  const [nameFilter, setNameFilter] = useState(null);
  const [descriptionFilter, setDescriptionFilter] = useState(null);
  const [priceSorter, setPriceSorter] = useState(defaultPriceSorter);

  // footer
  const [averageProductPrice, setAverageProductPrice] = useState(0);
  const [totalProducts, setTotalProducts] = useState(0);

  useEffect(() => {
    setDisplayedProducts(data);
  }, [data]);

  useEffect(() => {
    if (Array.isArray(displayedProducts)) {
      setTotalProducts(displayedProducts.length);

      const totalProductsPrice = displayedProducts.reduce((sum, product) => sum + (product.price || 0), 0);
      setAverageProductPrice((totalProductsPrice / displayedProducts.length).toFixed(2));
    }
  }, [displayedProducts]);

  useEffect(() => {
    let filteredProducts = data;

    if (nameFilter) {
      setPriceSorter(defaultPriceSorter);
      filteredProducts = filteredProducts.filter(product => product.name.toLowerCase().includes(nameFilter.toLowerCase()));
    }

    if (descriptionFilter) {
      setPriceSorter(defaultPriceSorter);
      filteredProducts = filteredProducts.filter(product => product.description.toLowerCase().includes(descriptionFilter.toLowerCase()));
    }

    setDisplayedProducts(filteredProducts);

  }, [nameFilter, descriptionFilter]);

  useEffect(() => {
    if (priceSorter && Array.isArray(displayedProducts)) {

      // original order
      const originalOrder = displayedProducts.sort(() => Math.random() - 0.5).slice()

      switch (priceSorter) {
        case 'None':
          setDisplayedProducts(originalOrder);
          break;
        case 'Ascending':
          setDisplayedProducts(displayedProducts.sort((a, b) => a.price - b.price).slice());
          break;
        case 'Descending':
          setDisplayedProducts(displayedProducts.sort((a, b) => b.price - a.price).slice());
          break;
        default:
          setDisplayedProducts(originalOrder);
      }
    }
  }, [priceSorter]);

  return (
    <div className="main-container">
      <header>
        Product List
      </header>

      <FiltersSorters
        setNameFilter={setNameFilter}
        setDescriptionFilter={setDescriptionFilter}
        setPriceSorter={setPriceSorter}
        priceSorter={priceSorter}
        defaultPriceSorter={defaultPriceSorter}
      />

      <ProductList
        products={displayedProducts}
      />

      <footer>
        <div className="footer-container">
          <div className="footer-text">
            {`Total Products: ${totalProducts}`}
          </div>

          <div className="footer-text">
            {`Average Product Price: $${averageProductPrice}`}
          </div>
        </div>

      </footer>
    </div>

  );
};