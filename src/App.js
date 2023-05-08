import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer';
import "./App.css"
import {
    Route, Routes
} from 'react-router-dom';
import Home from './components/Home';
// import { useSelector,useDispatch } from 'react-redux';

const App = () => {

    return (
        <>
            <Header/>
            <Routes>
                <Route path="/" element={<Home /> } />
            </Routes>
            <Footer/>
        </>
    )
}

export default App