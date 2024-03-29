import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import {BrowserRouter as Router, Route,Routes,Link} from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';
import About from "./pages/About";
import Contact from "./pages/Contact";
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' exact element={<Home/>} />
          <Route path="/products" exact element={<Products/>} />
          <Route path="/about" exact element={<About/>} />
          <Route path="/contact" exact element={<Contact/>} />
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
