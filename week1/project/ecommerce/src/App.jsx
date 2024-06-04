import { useState } from 'react'
import './App.css'
import categoriesList from '../fake-data/all-categories'
import Categories from './components/Categories'
import Products from './components/Products'
import productsList from '../fake-data/all-products'

function App() {
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(0)

      
  return ( 
      <div>        
        
        
        <Categories categoriesList = {categoriesList}/>
        <Products productsList = {productsList}/>
      </div>
     
  )
}

export default App
