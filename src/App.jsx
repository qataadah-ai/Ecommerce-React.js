import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './layout';
import Home from './pages/Home';
import Cart from './pages/cart';
import Products from './pages/Products';
import Details from './pages/Details';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="cart" element={<Cart />} />
          <Route path="products/:category" element={<Products />} />
          <Route path="/details/:id" element={<Details/>} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
