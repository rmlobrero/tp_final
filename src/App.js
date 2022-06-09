import './App.css';
import NavBar from './NavBar';
import ProductsList from './ProductsList';
import Footer from './Footer';
import Banner from './Banner';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Container>
      <BrowserRouter>
        <NavBar></NavBar>
        <Routes>
          <Route exact path='/' element={<Banner></Banner>} />
          <Route exact path='/home' element={<Banner></Banner>} />

          <Route exact path='/producto/all' element={<ProductsList></ProductsList>} />
          <Route path='/producto/1' element={<ProductsList></ProductsList>} />
          <Route path='/producto/2' element={<ProductsList></ProductsList>} />
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </Container>
  )
}

export default App;
