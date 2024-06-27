import React, { memo } from "react";
import {  Routes, Route, useLocation, } from "react-router-dom";
import Header from "./common/header";

import Main from "./pages/main";
import About from "./pages/about";
import History from "./pages/about/History";
import Product from "./pages/product";
import Notice from "./pages/notice";
import Board from "./pages/board";
import Sign from './pages/sign';
import Login from './pages/login';
import Mypage from './pages/user';
import Basket from './pages/user/Basket';
import View from "./pages/main/View";


const App = memo(() => {
    const location = useLocation();
    const isAuthPage = location.pathname === '/sign' || location.pathname === '/login';

    return (
        <div id="body-wrap">
            {!isAuthPage && <Header />}

            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/main/view" element={<View />} />
                <Route path="/about" element={<About />} />
                <Route path="/about/history" element={<History />} />
                <Route path="/board" element={<Board />} />
                <Route path="/notice" element={<Notice />} />
                <Route path="/product" element={<Product />} />
                <Route path="/sign" element={<Sign />} />
                <Route path="/login" element={<Login />} />
                <Route path="/user" element={<Mypage />} />
                <Route path="/user/basket" element={<Basket />} />
            </Routes>
        </div>
    );
});

export default App;
