import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import Footer from "./components/Footer";
import Header from "./components/Header";
import ProductsList from './pages/admin/ProductsList';
import UsersList from './pages/admin/UsersList';
import CartPage from './pages/CartPage';
import HomePage from "./pages/HomePage";
import LoginPage from './pages/LoginPage';
import PaymentPage from './pages/PaymentPage';
import PlaceOrderPage from './pages/PlaceOrderPage';
import ProfilePage from './pages/ProfilePage';
import RegisterPage from './pages/RegisterPage';
import ShippingPage from './pages/ShippingPage';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main style={{ minHeight: "81vh" }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/cart/:id" element={<CartPage />} />
          <Route path="/shipping" element={<ShippingPage />} />
          <Route path='/payment' element={<PaymentPage/>} />
           <Route path='/placeorder' element={<PlaceOrderPage/>} />

           <Route path='/admin/users' element={<UsersList/>} />
           <Route path='/admin/products' element={<ProductsList/>} />
          {/* <Route path='/order/:id' component={OrderScreen} /> */} 
        </Routes>
      </main>
      <Footer />

    </BrowserRouter>
  );
}

export default App;
