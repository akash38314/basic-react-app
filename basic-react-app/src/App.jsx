import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Title from "./Title.jsx"
import Product from './Product.jsx'
import './Product.css'

function App() {
  let option = ["hii-tech","fast","redable"];
  return(<>
     <Product title="laptop" price={30000}features={option}/>
     <Product title="phone" price={15000}features={option}/>
     <Product title="washingmachine" price={45000}features={option}/>
    </>
  )
}

export default App
