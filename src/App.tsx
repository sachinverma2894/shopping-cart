import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Container } from '@mui/system';
import React from 'react';
import Home from './pages/home';
import About from './pages/about';
import Store from './pages/store';

function App() {
  return (
    <React.Fragment>
      <Container maxWidth='sm'>
        <Routes>
          <Route path='/' element={<Home />} />
          {/* <Route path='/about' element={<About />} />
          <Route path='/store' element={<Store />} /> */}
        </Routes>
      </Container>
    </React.Fragment>
  );
}

export default App;
