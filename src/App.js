import './App.css';
import { BrowserRouter, Routes, Route, Link, NavLink } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Accommodation from './pages/Accommodation';
import Error from './pages/Error';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  return (
    <BrowserRouter>
    <Header ></Header>      
      <main className="container app-main">
        <Routes>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="accommodation/:id" element={<Accommodation />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
