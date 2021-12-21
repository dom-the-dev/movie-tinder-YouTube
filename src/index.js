import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import {AuthProvider} from "./auth";
import ProtectedRoute from "./components/ProtectedRoute";
import Profile from "./pages/Profile";

ReactDOM.render(
    <AuthProvider>
        <BrowserRouter>
            <Routes>
                <Route index element={<Home/>}/>
                <Route path={"sign-in"} element={<SignIn/>}/>
                <Route path={"profile"} element={<ProtectedRoute><Profile/></ProtectedRoute>}/>
            </Routes>
        </BrowserRouter>
    </AuthProvider>,
    document.getElementById('root')
);