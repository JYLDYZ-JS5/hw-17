import { useState } from 'react'
import { Cart } from './components/Header/Cart/Cart'
import { Header } from './components/Header/Header'
import { Meals } from './components/Meals/MEALS'
import CartProvider from './components/store/Cart-Provider'

function App() {
  const [cartIsShow, setCartIsShow] = useState(false)
  const showCart = () => {
    setCartIsShow(true)
  }
  const hideCartHandler = () => {
    setCartIsShow(false)
  }
// const  submitHandler=()=>{}



  return (
    <CartProvider>
      {cartIsShow && (
        <Cart onCloseCart={hideCartHandler} onClick={hideCartHandler} />
      )}
      <Header onClick={showCart} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  )
}

export default App
