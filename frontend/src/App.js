/** @format */

import { useContext } from "react";
import { Route, Routes } from "react-router-dom";

import { CartContext } from "./contexts/CartContext";
import { LoginModalProvider } from "./contexts/LoginModalContext";
// import { ProductsProvider } from "./contexts/ProductsContext";

// Importing bootstrap
import "bootstrap/dist/css/bootstrap.min.css";

// Importing components
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Catalogue from "./pages/Catalogue";
import { Category } from "./pages/Category";
import Product from "./pages/Product";
import NotFound from "./pages/NotFound";

import SearchPage from "./pages/SearchPage";

import Signup from "../src/pages/Signup";
import SharedLayout from "../src/Layout/SharedLayout";
import Checkout from "./pages/Checkout";
// import { categoriesArray } from "./categoriesArray";

import "./App.css";

function App() {
  const [cart, setCart] = useContext(CartContext);

  function handleAdd(product) {
    const exist = cart.find((item) => item.product_id === product.product_id);

    if (exist) {
      setCart(
        cart.map((item) =>
          item.product_id === product.product_id
            ? { ...exist, quantity: exist.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
      console.log(cart);
    }
  }

  function handleRemove(product) {
    const exist = cart.find((item) => item.product_id === product.product_id);

    if (exist && product.quantity > 1) {
      setCart(
        cart.map((item) =>
          item.product_id === product.product_id
            ? { ...exist, quantity: exist.quantity - 1 }
            : item
        )
      );
    }
  }

  return (
    <div className='App'>
      <LoginModalProvider>
        <Routes>
          <Route path='/' element={<SharedLayout />}>
            <Route index element={<Home />} />
            <Route path='/search' element={<SearchPage />} />

            <Route
              path='/cart'
              element={<Cart onAdd={handleAdd} onRemove={handleRemove} />}
            />
            <Route path='/catalogue' element={<Catalogue />} />
            <Route
              path='/:type'
              element={<Category onAdd={handleAdd} onRemove={handleRemove} />}
            />
            <Route
              path='/product/:id'
              element={<Product onAdd={handleAdd} onRemove={handleRemove} />}
            />
            <Route path='*' element={<NotFound />} />
          </Route>

          <Route path='/signup' element={<Signup />} />
          <Route path='/checkout' element={<Checkout />} />
        </Routes>
      </LoginModalProvider>
    </div>
  );
}

export default App;
