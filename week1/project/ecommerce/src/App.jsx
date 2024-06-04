import { useState } from 'react'
import './App.css'
import categoriesList from '../fake-data/all-categories'
import Categories from './components/Categories'
import Products from './components/Products'
import productsList from '../fake-data/all-products'

function App() {
  const [activeCategory, setActiveCategory] = useState("")

  const handleClick = (category) => {
    setActiveCategory(category)
}

  return ( 
      <div>     
        <Categories categoriesList = {categoriesList} handleClick={handleClick}/>
        <Products productsList = {productsList} activeCategory={activeCategory}/>
      </div>
     
  )
}

export default App
