import { useState, useEffect } from 'react';
import Categories from './components/Categories';
import Products from './components/Products';
import ProductInfo from './components/ProductInfo';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  const [activeCategory, setActiveCategory] = useState('');
  const [allCategories, setAllCategories] = useState([]);
  const [productsList, setProductsList] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleCategoryClick = (category) => {
    if (category === activeCategory) {
      setActiveCategory('');
    } else {
      setActiveCategory(category);
    }
  };

  // fetch data on mount for all categories
  useEffect(() => {
    fetch('https://fakestoreapi.com/products/categories')
      .then((res) => res.json())
      .then((data) => {
        setAllCategories(data);
      });
  }, []);
  // fetch data on mount for all or selected products
  useEffect(() => {
    setLoading(true);
    if (activeCategory === '') {
      fetch('https://fakestoreapi.com/products')
        .then((res) => res.json())
        .then((data) => {
          setProductsList(data);
          setLoading(false);
        });
    } else {
      fetch(`https://fakestoreapi.com/products/category/${activeCategory}`)
        .then((res) => res.json())
        .then((data) => {
          setProductsList(data);
          setLoading(false);
        });
    }
  }, [activeCategory]);

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
              <Products
                productsList={productsList}
                loading={loading}
                activeCategory={activeCategory}
              />
            </div>
          }
        />
        <Route path='/:id' element={<ProductInfo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
