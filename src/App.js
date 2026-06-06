import { useState } from 'react';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import CartProvider from './store/CartProvider';
import Cart from './components/Cart/Cart';

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  function showCarttHandler() {
    setCartIsShown(true);
  }
  function hideCartHandler() {
    setCartIsShown(false);
  }

  function App() { }
  return (
    <CartProvider>
      <Cart />
      {cartIsShown && <div>Cart...</div>}
      <Header onShowCart={showCarttHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}



export default App;
