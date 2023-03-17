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

      </Routes>
    </div>
  );
}

export default App;
