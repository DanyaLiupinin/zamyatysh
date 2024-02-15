import React, { useEffect, useRef } from "react";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import "./App.scss";

import { useActionCreators, itemsActions, usersActions } from "@store";

import {
  About,
  Account,
  Basket,
  ItemCard,
  Shop,
  WelcomePageFS,
  LoginFS,
  RegisterFS
} from "@pages";


const App: React.FC<any> = () => {

  const isFirstRender = useRef(true);

  const navigate = useNavigate();

  const locale = useSelector((state: any) => state.items.locale);
  const loggedIn = useSelector((state: any) => state.user.loggedIn);
  const basketItems = useSelector((state: any) => state.items.basketItemsShort);
  const redirectPath = useSelector((state: any) => state.user.rediretcPath);

  const {
    changeLanguage,
    setBasket,
  } = useActionCreators(itemsActions);

  const { setLoggedIn, setRedirectPath } = useActionCreators(usersActions);

  useEffect(() => {
    if (localStorage.getItem("locale")) {
      const locale = localStorage.getItem("locale");
      changeLanguage(locale);
    } else {
      changeLanguage("en");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (redirectPath) {
      navigate(redirectPath);
      setRedirectPath(null);
    };
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
    const loggedIn = localStorage.getItem('loggedIn');
    if (loggedIn && loggedIn === 'true') {
      setLoggedIn(true);
    };
  }, []);

  return (
    <div className='App'>
      <Routes>
        <Route
          path='/register'
          element={loggedIn ? <Navigate to='/account' /> : <RegisterFS />}
        />{" "}
        <Route
          path='/login'
          element={loggedIn ? <Navigate to='/account' /> : <LoginFS />}
        />{" "}
        <Route path='/' element={<WelcomePageFS />} />
        <Route path='/about' element={<About />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/shop/:id' element={<ItemCard />} />
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