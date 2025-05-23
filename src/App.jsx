import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ServiceDetailPage from './pages/ServiceDetailPage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ContactUs from './components/Contact';
import About from './components/About';
import Clients from './components/Clients'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/getSingleRecord/:id" element={<ServiceDetailPage />} />
          <Route path="/ContactUs" element={<ContactUs />} />
          <Route path="/About" element={<About />} />
          <Route path="/Clients" element={<Clients />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
