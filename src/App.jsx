import { useState } from 'react'
import Header from "./components/Header"
import Cart from './components/Cart'
import Product from "./components/Product"
import { ProductsContextProvider } from './contexts/ProductsContexts'


function App() {
  const [cartCount, setCartCount] = useState(0)

  return (
    <ProductsContextProvider>
      <main>
       
        <Header setCartCount={setCartCount}/>
        <Product cartCount={cartCount} setCartCount={setCartCount} />
      </main>
    </ProductsContextProvider>
  )
}

export default App
