import React, { useState, useEffect, useCallback, useContext } from 'react';
import Categories from './components/Categories';
import Products from './components/Products';
import ProductInfo from './components/ProductInfo';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { PRODUCTS_URL } from './constants.js';

export const FavoritesContext = React.createContext();

function App() {
  const [activeCategory, setActiveCategory] = useState('');
  const [allCategories, setAllCategories] = useState([]);
  const [productsList, setProductsList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState({});

  const handleCategoryClick = (category) => {
    if (category === activeCategory) {
      setActiveCategory('');
    } else {
      setActiveCategory(category);
    }
  };

  const fetchCategories = async () => {
    try {
      const res = await fetch(`${PRODUCTS_URL}/categories`);
      const data = await res.json();
      setAllCategories(data);
    } catch (err) {
      setError({
        categoriesList: true,
        message: `Error fetching categories: ${err} `,
      });
    }
  };

  const fetchProducts = useCallback(async () => {
    try {
      setLoading(true);
      const url = activeCategory
        ? `${PRODUCTS_URL}/category/${activeCategory}`
        : PRODUCTS_URL;
      const response = await fetch(url);
      const result = await response.json();
      setProductsList(result);
    } catch (err) {
      setError({
        productsList: true,
        message: `Error fetching product data: ${err} `,
      });
    } finally {
      setLoading(false);
    }
  }, [activeCategory]);

  // fetch data on mount for all categories and products
  useEffect(() => {
    fetchCategories();
    fetchProducts();
    return () => {
      setError({});
    };
  }, [fetchProducts]);
  // fetch products when active category changes
  useEffect(() => {
    fetchProducts();
    return () => {
      setError({});
    };
  }, [activeCategory, fetchProducts]);

  if (error.categoriesList) {
    return <div>{error.message}</div>;
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          element={
            <div>
              <Categories
                categoriesList={allCategories}
                handleClick={handleCategoryClick}
              />

              {error.productsList ? (
                <div> {error.message}</div>
              ) : (
                <Products
                  productsList={productsList}
                  loading={loading}
                  activeCategory={activeCategory}
                />
              )}
            </div>
          }
        />
        <Route path='/:id' element={<ProductInfo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
