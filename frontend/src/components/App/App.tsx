import React, { useEffect, useRef } from "react";
import { Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

import "./App.scss";

import WelcomePage from "../WelcomePage/WelcomePage";
import About from "../About/About";
import Shop from "../Shop/Shop";
import ItemCard from "../ItemCard/ItemCard";
import Register from "../Auth/Register";
import Login from "../Auth/Login";
import Account from "../Account/Account";
import Basket from "../Basket/Basket";
import { useActionCreators } from "../../store";
import { itemsActions } from "../../store/items/index";
import { usersActions } from "../../store/user";


import { useNavigate } from "react-router-dom";

const App: React.FC<any> = () => {
  const isFirstRender = useRef(true);

  const navigate = useNavigate();

  const locale = useSelector((state: any) => state.items.locale);
  const loggedIn = useSelector((state: any) => state.user.loggedIn);
  const basketItems = useSelector((state: any) => state.items.basketItemsShort)
  

  const { 
    getAllCategoriesThunk, 
    getAllItemsThunk, 
    changeLanguage,
    setBasket
  } = useActionCreators(itemsActions);
    
  const { getUserDataThunk } = useActionCreators(usersActions);

  const redirectPath = useSelector((state: any) => state.user.rediretcPath);

  useEffect(() => {
    if (localStorage.getItem("jwt") && localStorage.getItem("userId")) {
      const id = localStorage.getItem("userId")
      getUserDataThunk(id);
    }
  }, []);

  useEffect(() => {
    if (localStorage.getItem("locale")) {
      const locale = localStorage.getItem("locale");
      changeLanguage(locale);
    } else {
      changeLanguage("en");
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



  useEffect(() => {
    if (redirectPath) navigate(redirectPath);
  }, [redirectPath]);


useEffect(() => {
  if (localStorage.getItem('basketItems')) {
    const storageItems = localStorage.getItem('basketItems')
    let storageItemsObj;
    if (storageItems) storageItemsObj = JSON.parse(storageItems);
    setBasket(storageItemsObj);
  }
}, [])


  useEffect(() => {

    if (basketItems) {
      localStorage.setItem('basketItems', JSON.stringify(basketItems));
    } else {
      localStorage.setItem('basketItems', '');
    }

  }, [basketItems])

  return (
    <div className="App">
      <Routes>
        <Route
          path="/register"
          element={loggedIn ? <Navigate to="/account" /> : <Register />}
        />{" "}
        <Route
          path="/login"
          element={loggedIn ? <Navigate to="/account" /> : <Login />}
        />{" "}
        {/* сделать переадресацию для авторизированного юзера */}
        <Route path="/" element={<WelcomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/shop/:slug" element={<ItemCard />} />
        <Route
          path="/account"
          element={loggedIn ? <Account /> : <Navigate to="/login" />}
        />
        <Route path="/basket" element={<Basket />} />

      </Routes>
    </div>
  );
};

export default App;

// TODO

// мультиязычность
// метрики!!
