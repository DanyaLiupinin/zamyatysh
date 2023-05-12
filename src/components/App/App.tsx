import React from 'react';
import {
  Routes,
  Route,
  //Navigate,
  //useNavigate,
  //useLocation
} from 'react-router-dom';

import './App.scss';

import WelcomePage from '../WelcomePage/WelcomePage';
import About from '../About/About';
import Shop from '../Shop/Shop';
import ItemCard from '../ItemCard/ItemCard';

const App: React.FC = () => {
  return (
    <div className="App">
      <Routes>

        <Route path='/' element={
          <WelcomePage />
        } />

        <Route path='/about' element={
          <About />
        } />

        <Route path='/shop' element={
          <Shop />
        } />

        <Route path='/shop/:slug' element={
          <ItemCard />
        } />

      </Routes>
    </div>
  );
}

export default App;

// TODO

// мультиязычность
// метрики!!
