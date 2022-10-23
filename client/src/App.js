import Footer from "./components/Footer";
import Header from "./components/Header";
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from "./pages/HomePage";

function App() {
  return (
    <>
      <Header />
      <main>
       <HomePage/>
      </main>
      <Footer />
    </>
  );
}

export default App;
