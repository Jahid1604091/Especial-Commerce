import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import Footer from "./components/Footer";
import Header from "./components/Header";
import CartPage from './pages/CartPage';
import HomePage from "./pages/HomePage";
import LoginPage from './pages/LoginPage';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main style={{ minHeight: "81vh" }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/cart/:id" element={<CartPage />} />
        </Routes>
      </main>
      <Footer />

    </BrowserRouter>
  );
}

export default App;
