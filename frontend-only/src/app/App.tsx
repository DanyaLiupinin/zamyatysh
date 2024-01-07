import React, { useEffect, useRef } from "react";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import "./App.scss";

import WelcomePage from "../pages/WelcomePage";
import About from "../pages/About";
import Shop from "../pages/Shop";
import Item from "../pages/Item";
import Register from "../pages/Register";
import Login from "../pages/Login";
import Account from "../pages/Account";
import Basket from "../pages/Basket";
import { useActionCreators } from "../store";
import { itemsActions } from "../store/items";
import { usersActions } from "../store/user";

const App: React.FC<any> = () => {

  const isFirstRender = useRef(true);

  const navigate = useNavigate();

  const locale = useSelector((state: any) => state.items.locale);
  const loggedIn = useSelector((state: any) => state.user.loggedIn);
  const basketItems = useSelector((state: any) => state.items.basketItemsShort);
  const redirectPath = useSelector((state: any) => state.user.rediretcPath);

  const {
    getAllCategoriesThunk,
    getAllItemsThunk,
    changeLanguage,
    setBasket
  } = useActionCreators(itemsActions);

  const { getUserDataThunk, setLoggedIn } = useActionCreators(usersActions);

  useEffect(() => {
    if (localStorage.getItem("jwt") && localStorage.getItem("userId")) {
      const id = localStorage.getItem("userId");
      getUserDataThunk(id);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (localStorage.getItem("locale")) {
      const locale = localStorage.getItem("locale");
      changeLanguage(locale);
    } else {
      changeLanguage("en");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /* 
    useEffect(() => {
      if (isFirstRender.current) {
        isFirstRender.current = false;
        return;
      }
  
      getAllItemsThunk();
      getAllCategoriesThunk();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [locale]);
    */

  useEffect(() => {
    if (redirectPath) navigate(redirectPath);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [redirectPath]);

  useEffect(() => {
    if (localStorage.getItem('basketItems')) {
      const storageItems = localStorage.getItem('basketItems');
      let storageItemsObj;
      if (storageItems) {
        storageItemsObj = JSON.parse(storageItems);
        setBasket(storageItemsObj);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (basketItems) {
      localStorage.setItem('basketItems', JSON.stringify(basketItems));
    } else {
      localStorage.setItem('basketItems', '');
    }

  }, [basketItems]);

  useEffect(() => {
    const storedData = localStorage.getItem('userData');
    if (storedData) {
      setLoggedIn(true);
    };
  }, []);

  return (
    <div className='App'>
      <Routes>
        <Route
          path='/register'
          element={loggedIn ? <Navigate to='/account' /> : <Register />}
        />{" "}
        <Route
          path='/login'
          element={loggedIn ? <Navigate to='/account' /> : <Login />}
        />{" "}
        <Route path='/' element={<WelcomePage />} />
        <Route path='/about' element={<About />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/shop/:id' element={<Item />} />
        <Route
          path='/account'
          element={loggedIn ? <Account /> : <Navigate to='/login' />}
        />
        <Route path='/basket' element={<Basket />} />
      </Routes>
    </div>
  );
};

export default App;