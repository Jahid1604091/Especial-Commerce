import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import Footer from "./components/Footer";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </main>
      <Footer />

    </BrowserRouter>
  );
}

export default App;
