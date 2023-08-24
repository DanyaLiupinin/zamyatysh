import React, { useEffect, useRef } from 'react';
import {
  Routes,
  Route
} from 'react-router-dom';
import { useSelector } from 'react-redux';

import './App.scss';

import WelcomePage from '../WelcomePage/WelcomePage';
import About from '../About/About';
import Shop from '../Shop/Shop';
import ItemCard from '../ItemCard/ItemCard';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Account from '../Account/Account';
import { useActionCreators } from '../../store';
import { itemsActions } from '../../store/items/index';
import { usersActions } from '../../store/user';


const App: React.FC<any> = () => {

  const isFirstRender = useRef(true);

  const locale = useSelector((state: any) => state.items.locale);
  const loggedIn = useSelector((state: any) => state.user.loggedIn)

  const { getAllCategoriesThunk, getAllItemsThunk, changeLanguage } = useActionCreators(itemsActions);
  const { setLoggedIn } = useActionCreators(usersActions);

  console.log(loggedIn)

  useEffect(() => {
    if (localStorage.getItem('jwt')) {
      setLoggedIn(true);
    }
  });
  

  useEffect(() => {
    if (localStorage.getItem('locale')) {
      const locale = localStorage.getItem('locale');
      changeLanguage(locale);
    } else {
      changeLanguage('en');
    }
  }, []);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    getAllItemsThunk();
    getAllCategoriesThunk();
  }, [locale]);

  return (
    <div className='App'>
      <Routes>

        <Route path='/register' element={
          <Register />
        } />  {/* сделать переадресацию для авторизированного юзера */}

        <Route path='/login' element={
          <Login />
        } /> {/* сделать переадресацию для авторизированного юзера */}

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

        <Route path='/account' element={
          <Account />
        } />

      </Routes>
    </div>
  );
};

export default App;

// TODO

// мультиязычность
// метрики!!
