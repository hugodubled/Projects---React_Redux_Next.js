import Header from './components/Header.jsx';
import MealsWithUseHttp from './components/MealsWithUseHttp.jsx';
import Cart from './components/UI/Cart.jsx';
import CheckoutWithUseHttp from './components/UI/CheckoutWithUseHttp.jsx';
import { CartContextProvider } from './components/Store/CartContext.jsx';
import { UserProgressContextProvider } from './components/Store/UserProgressContext.jsx';

function App() {
  return (
    <UserProgressContextProvider>
    <CartContextProvider>
      <Header/>
      <MealsWithUseHttp/>
      <Cart/>
      <CheckoutWithUseHttp/>
    </CartContextProvider>
    </UserProgressContextProvider>
  );
}

export default App;
