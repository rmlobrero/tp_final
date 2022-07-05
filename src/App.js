import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "animate.css/animate.min.css";

import Home from './routes/Home';
import Contacto from './routes/Contacto'
import NotFoundPage from './routes/NotFoundPage'


import NavBar from './components/NavBar'
import Footer from './components/Footer'
import Cards from './components/Cards';

function App() {
  return (
    <Container>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/producto' element={<Cards />} />
          <Route path='/contacto' element={<Contacto />} />
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </Container>
  )
}

export default App;
